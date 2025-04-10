
import { useState } from 'react';
import { CVTemplate, cvTemplates } from '@/data/internships';

interface TemplateSelectorProps {
  onSelectTemplate: (template: CVTemplate) => void;
  selectedId?: string;
}

const TemplateSelector = ({ onSelectTemplate, selectedId }: TemplateSelectorProps) => {
  const handleSelect = (template: CVTemplate) => {
    onSelectTemplate(template);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Choose a Template</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cvTemplates.map((template) => (
          <div 
            key={template.id}
            className={`border rounded-lg overflow-hidden transition-all cursor-pointer ${
              selectedId === template.id 
                ? 'ring-2 ring-primary scale-[1.02]' 
                : 'hover:border-primary hover:shadow-md'
            }`}
            onClick={() => handleSelect(template)}
          >
            <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center">
              <img 
                src={template.thumbnail} 
                alt={template.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium">{template.name}</h3>
              <p className="text-sm text-muted-foreground">{template.description}</p>
              {template.industry && (
                <span className="text-xs mt-1 inline-block px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full">
                  {template.industry}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
