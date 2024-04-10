export const metadata = {
  title: 'code'
};

export default function Code({ children }) {
  return (
    <div
      id="code-layout"
      className="page"
    >
      { /* code layout */ }
      { children }
    </div>
  );
}
