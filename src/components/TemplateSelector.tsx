import React from 'react';
import { Template } from '../types';

interface TemplateSelectorProps {
  templates: Template[];
  onSelectTemplate: (template: Template) => void;
  onClose: () => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  templates,
  onSelectTemplate,
  onClose,
}) => {
  return (
    <div className="p-3">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Quick Templates</h3>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
        >
          ✕
        </button>
      </div>
      
      <div className="max-h-48 overflow-y-auto">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onSelectTemplate(template)}
            className="w-full text-left mb-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
          >
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{template.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{template.content}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;