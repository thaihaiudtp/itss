
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CVTemplate, cvTemplates } from '@/data/internships';
import TemplateSelector from '@/components/cv/TemplateSelector';
import CVForm from '@/components/cv/CVForm';
import CVPreview from '@/components/cv/CVPreview';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';

const CVBuilder = () => {
  const [activeTab, setActiveTab] = useState('templates');
  const [selectedTemplate, setSelectedTemplate] = useState<CVTemplate | null>(null);
  const [cvData, setCvData] = useState<any>(null);

  const handleTemplateSelect = (template: CVTemplate) => {
    setSelectedTemplate(template);
    setActiveTab('details');
    toast.success(`Selected "${template.name}" template`);
  };

  const handleFormSubmit = (data: any) => {
    setCvData(data);
    setActiveTab('preview');
    toast.success("CV information saved successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-background py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Intelligent CV Builder</h1>
          <p className="text-muted-foreground mb-6">
            Create a professional CV in minutes with our easy-to-use builder
          </p>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="templates">Choose Template</TabsTrigger>
              <TabsTrigger value="details" disabled={!selectedTemplate}>Enter Details</TabsTrigger>
              <TabsTrigger value="preview" disabled={!cvData}>Preview & Download</TabsTrigger>
            </TabsList>
            
            <TabsContent value="templates" className="animate-fade-in">
              <TemplateSelector 
                onSelectTemplate={handleTemplateSelect} 
                selectedId={selectedTemplate?.id}
              />
            </TabsContent>
            
            <TabsContent value="details" className="animate-fade-in">
              <div className="grid grid-cols-1">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">
                    Enter Your Information
                    {selectedTemplate && (
                      <span className="text-sm font-normal text-muted-foreground ml-2">
                        Using {selectedTemplate.name} template
                      </span>
                    )}
                  </h2>
                  <CVForm onSubmit={handleFormSubmit} initialData={cvData} />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="preview" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {cvData && selectedTemplate && (
                  <CVPreview cvData={cvData} template={selectedTemplate.id} />
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2025 internatree. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CVBuilder;
