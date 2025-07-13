export const ExternalLink = (
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>
) => {
  const { children, href = '', ...rest } = props;
  return (
    <a
      {...rest}
      target='_blank'
      href={href}
      className='break-words text-pink-600 no-underline underline-offset-4 hover:underline'
    >
      {children}
    </a>
  );
};
