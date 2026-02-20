export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="space-y-12">
        <div id="ml-projects">
          <h3 className="text-2xl font-semibold mb-4">ML / Data Projects</h3>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-300">
            <li>
              <strong>Handwritten Digit Recognition</strong> – CNN model for high-
              accuracy digit classification.
            </li>
            <li>
              <strong>AI-based Fake Account Identifier</strong> – combined
              frontend/backend system to detect bot profiles.
            </li>
            <li>
              <strong>Automatic Pothole Detector</strong> – image processing + IoT
              prototype for road damage detection (team lead project).
            </li>
            <li>
              <strong>IoT-based Automated Goods Handling</strong> – end-to-end
              automation of logistics using sensors.
            </li>
          </ul>
        </div>
        <div id="web-projects">
          <h3 className="text-2xl font-semibold mb-4">Web / UI Projects</h3>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-300">
            <li>
              <strong>Pinterest Clone</strong> – full-stack Django application
              replicating key features.
            </li>
            <li>
              <strong>Personal Portfolio</strong> – this website showcasing
              projects and skills.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
