/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactElement, useEffect, useState } from 'react';
import { NextPageContext } from 'next';
import Router from 'next/router';
import cookie from 'cookie';
import Cookies from 'js-cookie';

import { Session } from '@app/interfaces/Session';

type Props = {
  session: Session;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withPrivateRoute = (Component: any) => {
  const PrivateComponent = (props: Props): ReactElement => {
    const [isLoading, setIsLoading] = useState(true);
    const [session] = useState<Session | null>(props.session);

    useEffect(() => {
      setTimeout(() => {
        console.log(session);
        if (session) {
          let expires = new Date(new Date().getTime() + 20 * 60 * 1000);

          if (session?.isRemember) {
            expires = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
          }

          Cookies.set('session', session, { expires });
          setIsLoading(false);
        }
      }, 1000);
    }, [session]);

    return <div>{isLoading ? <div>Carregando...</div> : <Component {...props} />}</div>;
  };

  PrivateComponent.getInitialProps = async (ctx: NextPageContext) => {
    const cookies = cookie.parse(ctx.req ? ctx.req.headers.cookie || '' : document.cookie);

    let pageProps = {};
    let session: Session | null = null;

    if (cookies.session) {
      pageProps = Component.getInitialProps && (await Component.getInitialProps(ctx));
      session = JSON.parse(cookies.session);
    } else {
      if (!session) {
        ctx.res ? ctx.res.writeHead(302, { Location: '/login' }).end() : Router.push('/login');
      }
    }

    return { ...pageProps, session };
  };

  return PrivateComponent;
};

export default withPrivateRoute;
