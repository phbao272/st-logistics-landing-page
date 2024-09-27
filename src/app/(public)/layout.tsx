import { LayoutWithHeaderFooter } from '@/components/shared/layouts';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutWithHeaderFooter>{children}</LayoutWithHeaderFooter>;
};

export default PublicLayout;
