import React, { useState } from 'react';
import { CheckCircle, Circle, Calendar, Users, Code, Rocket, Target, ArrowRight } from 'lucide-react';

const RoadmapApp = () => {
  const [completedTasks, setCompletedTasks] = useState(new Set());
  const [expandedPhases, setExpandedPhases] = useState(new Set(['phase1']));

  const toggleTask = (taskId) => {
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    setCompletedTasks(newCompleted);
  };

  const togglePhase = (phaseId) => {
    const newExpanded = new Set(expandedPhases);
    if (newExpanded.has(phaseId)) {
      newExpanded.delete(phaseId);
    } else {
      newExpanded.add(phaseId);
    }
    setExpandedPhases(newExpanded);
  };

  const phases = [
    {
      id: 'phase1',
      title: 'Research & Planning',
      duration: 'Month 1',
      color: 'bg-blue-100 border-blue-300',
      icon: <Target className="w-5 h-5 text-blue-600" />,
      tasks: [
        { id: 't1', title: 'Market research & competitor analysis', priority: 'High' },
        { id: 't2', title: 'Define target user personas (consultancies & students)', priority: 'High' },
        { id: 't3', title: 'Create detailed feature requirements document', priority: 'High' },
        { id: 't4', title: 'Design Django project structure & API architecture', priority: 'High' },
        { id: 't5', title: 'Create user journey maps & wireframes', priority: 'Medium' },
        { id: 't6', title: 'Set up project management tools & workflows', priority: 'Medium' }
      ]
    },
    {
      id: 'phase2',
      title: 'Design & Prototyping',
      duration: 'Month 2',
      color: 'bg-purple-100 border-purple-300',
      icon: <Users className="w-5 h-5 text-purple-600" />,
      tasks: [
        { id: 't7', title: 'Create UI/UX designs for all major screens', priority: 'High' },
        { id: 't8', title: 'Build interactive prototypes', priority: 'High' },
        { id: 't9', title: 'User testing with 3-5 education consultancies', priority: 'High' },
        { id: 't10', title: 'Refine designs based on feedback', priority: 'Medium' },
        { id: 't11', title: 'Create design system & component library', priority: 'Medium' },
        { id: 't12', title: 'Design Django models & database relationships', priority: 'High' }
      ]
    },
    {
      id: 'phase3',
      title: 'Core Development',
      duration: 'Months 3-4',
      color: 'bg-green-100 border-green-300',
      icon: <Code className="w-5 h-5 text-green-600" />,
      tasks: [
        { id: 't13', title: 'Set up Django project, DRF, PostgreSQL & deployment pipeline', priority: 'High' },
        { id: 't14', title: 'Implement Django user authentication & JWT tokens', priority: 'High' },
        { id: 't15', title: 'Create Django models for students, consultancies & applications', priority: 'High' },
        { id: 't16', title: 'Build REST APIs for application tracking & status updates', priority: 'High' },
        { id: 't17', title: 'Implement file upload APIs with Django storage', priority: 'High' },
        { id: 't18', title: 'Create consultancy dashboard APIs & permissions', priority: 'High' },
        { id: 't19', title: 'Build notification system with Django signals', priority: 'Medium' },
        { id: 't20', title: 'Develop analytics APIs with Django ORM aggregations', priority: 'Medium' }
      ]
    },
    {
      id: 'phase4',
      title: 'Advanced Features',
      duration: 'Month 5',
      color: 'bg-orange-100 border-orange-300',
      icon: <Rocket className="w-5 h-5 text-orange-600" />,
      tasks: [
        { id: 't21', title: 'Integrate university database with Django models & fixtures', priority: 'High' },
        { id: 't22', title: 'Build automated status updates with Django Celery tasks', priority: 'Medium' },
        { id: 't23', title: 'Integrate payment APIs (Stripe/PayPal) with Django', priority: 'High' },
        { id: 't24', title: 'Create email system with Django templates & SendGrid', priority: 'Medium' },
        { id: 't25', title: 'Add calendar integration APIs for deadline tracking', priority: 'Low' },
        { id: 't26', title: 'Optimize Django queries & implement caching (Redis)', priority: 'High' }
      ]
    },
    {
      id: 'phase5',
      title: 'Testing & Launch',
      duration: 'Month 6',
      color: 'bg-red-100 border-red-300',
      icon: <CheckCircle className="w-5 h-5 text-red-600" />,
      tasks: [
        { id: 't27', title: 'Django testing (unit tests, API tests, model tests)', priority: 'High' },
        { id: 't28', title: 'Security audit (Django security checklist, OWASP)', priority: 'High' },
        { id: 't29', title: 'Beta testing with 2-3 consultancies', priority: 'High' },
        { id: 't30', title: 'Django performance optimization & load testing', priority: 'High' },
        { id: 't31', title: 'API documentation with DRF browsable API & Swagger', priority: 'Medium' },
        { id: 't32', title: 'Deploy Django to production (Docker + AWS/DigitalOcean)', priority: 'High' },
        { id: 't33', title: 'Monitor initial usage & gather feedback', priority: 'Medium' }
      ]
    }
  ];

  const getPhaseProgress = (phase) => {
    const completed = phase.tasks.filter(task => completedTasks.has(task.id)).length;
    return Math.round((completed / phase.tasks.length) * 100);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-600 bg-red-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Student Application Platform</h1>
        <h2 className="text-xl text-gray-600 mb-4">6-Month Development Roadmap</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Calendar className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold text-blue-800">Timeline</span>
            </div>
            <p className="text-blue-700">6 months to MVP launch</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Target className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold text-green-800">Goal</span>
            </div>
            <p className="text-green-700">Full-featured platform for consultancies</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-purple-600 mr-2" />
              <span className="font-semibold text-purple-800">Target Users</span>
            </div>
            <p className="text-purple-700">Education consultancies & students</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {phases.map((phase, index) => (
          <div key={phase.id} className={`bg-white rounded-lg shadow-md border-2 ${phase.color}`}>
            <div 
              className="p-4 cursor-pointer flex items-center justify-between"
              onClick={() => togglePhase(phase.id)}
            >
              <div className="flex items-center space-x-3">
                {phase.icon}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{phase.title}</h3>
                  <p className="text-sm text-gray-600">{phase.duration}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-700">
                    {getPhaseProgress(phase)}% Complete
                  </div>
                  <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getPhaseProgress(phase)}%` }}
                    ></div>
                  </div>
                </div>
                <ArrowRight className={`w-5 h-5 text-gray-400 transform transition-transform ${expandedPhases.has(phase.id) ? 'rotate-90' : ''}`} />
              </div>
            </div>

            {expandedPhases.has(phase.id) && (
              <div className="px-4 pb-4">
                <div className="grid gap-2">
                  {phase.tasks.map((task) => (
                    <div 
                      key={task.id}
                      className={`flex items-center space-x-3 p-3 rounded-lg border transition-all duration-200 cursor-pointer hover:bg-gray-50 ${
                        completedTasks.has(task.id) ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'
                      }`}
                      onClick={() => toggleTask(task.id)}
                    >
                      {completedTasks.has(task.id) ? (
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                      
                      <div className="flex-grow">
                        <span className={`${completedTasks.has(task.id) ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                          {task.title}
                        </span>
                      </div>
                      
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Success Factors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-medium text-gray-700">Technical</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Django REST Framework + PostgreSQL + Redis</li>
              <li>• JWT authentication & role-based permissions</li>
              <li>• Celery for background tasks & email processing</li>
              <li>• Docker deployment with proper environment configs</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-gray-700">Business</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Validate features with real consultancies early</li>
              <li>• Focus on core workflows first</li>
              <li>• Plan pricing model during development</li>
              <li>• Prepare customer support processes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapApp;