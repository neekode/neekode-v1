import ProjectsContent from '../components/contents/Projects';

export const metadata = {
  title: 'projects'
};

// { children }
export default function Projects() {
  return (
    <div
      id="projects"
      className="page"
    >
      <ProjectsContent />
    </div>
  );
}
