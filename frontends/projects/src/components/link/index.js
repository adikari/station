import { Link } from 'routes';

const LinkComponent = ({ href, route, linkProps, children, prefetch = false, className }) => (
  <Link prefetch={prefetch} href={href} route={route}>
    <a {...linkProps} className={className}>
      {children}
    </a>
  </Link>
);

export { LinkComponent as Link };
