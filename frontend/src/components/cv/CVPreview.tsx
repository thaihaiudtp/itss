
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { DownloadIcon, Share2Icon, LinkedinIcon } from 'lucide-react';

interface CVPreviewProps {
  cvData: any;
  template: string;
}

const CVPreview = ({ cvData, template }: CVPreviewProps) => {
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    toast.success("Download started! Your CV will be downloaded as a PDF.");
  };

  const handleShare = () => {
    toast("Share feature coming soon!");
  };

  const handleLinkedIn = () => {
    toast("LinkedIn export feature coming soon!");
  };

  const renderModernTemplate = () => {
    return (
      <div className="bg-white p-8 shadow-lg h-full">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h1 className="text-3xl font-bold text-primary mb-2">
            {cvData?.personalInfo?.fullName || "Your Name"}
          </h1>
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            {cvData?.personalInfo?.email && (
              <div>{cvData.personalInfo.email}</div>
            )}
            {cvData?.personalInfo?.phone && (
              <div>• {cvData.personalInfo.phone}</div>
            )}
            {cvData?.personalInfo?.location && (
              <div>• {cvData.personalInfo.location}</div>
            )}
            {cvData?.personalInfo?.website && (
              <div>• {cvData.personalInfo.website}</div>
            )}
            {cvData?.personalInfo?.linkedin && (
              <div>• {cvData.personalInfo.linkedin}</div>
            )}
          </div>
        </div>

        {/* Summary */}
        {cvData?.summary && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2 text-primary">Professional Summary</h2>
            <p className="text-sm">{cvData.summary}</p>
          </div>
        )}

        {/* Experience */}
        {cvData?.experience && cvData.experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 text-primary">Work Experience</h2>
            {cvData.experience.map((exp: any, index: number) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium">{exp.title}</h3>
                  <div className="text-sm text-muted-foreground">
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                <div className="text-sm mb-1">
                  {exp.company}
                  {exp.location && `, ${exp.location}`}
                </div>
                {exp.description && (
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {cvData?.education && cvData.education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 text-primary">Education</h2>
            {cvData.education.map((edu: any, index: number) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium">{edu.degree}</h3>
                  <div className="text-sm text-muted-foreground">
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>
                <div className="text-sm mb-1">
                  {edu.institution}
                  {edu.location && `, ${edu.location}`}
                </div>
                {edu.description && (
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {cvData?.skills && cvData.skills.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-3 text-primary">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {cvData.skills.map((skill: any, index: number) => (
                skill.name && (
                  <span key={index} className="bg-secondary px-3 py-1 rounded-full text-sm">
                    {skill.name}
                  </span>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-muted p-4 flex justify-end gap-2 mb-4 rounded-lg">
        <Button variant="outline" size="sm" onClick={handleLinkedIn} className="flex items-center gap-1">
          <LinkedinIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Export to LinkedIn</span>
        </Button>
        <Button variant="outline" size="sm" onClick={handleShare} className="flex items-center gap-1">
          <Share2Icon className="h-4 w-4" />
          <span className="hidden sm:inline">Share</span>
        </Button>
        <Button size="sm" onClick={handleDownload} className="flex items-center gap-1">
          <DownloadIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Download PDF</span>
        </Button>
      </div>
      
      <div className="flex-grow overflow-auto border rounded-lg shadow-sm bg-gray-50">
        <div className="w-[595px] h-[842px] bg-white mx-auto my-4 shadow-md" ref={previewRef}>
          {template === "modern" && renderModernTemplate()}
          {/* Add more templates as needed */}
          {!template && (
            <div className="flex items-center justify-center h-full p-8 text-center">
              <div>
                <h2 className="text-lg font-medium mb-2">Select a template to preview your CV</h2>
                <p className="text-muted-foreground">
                  Choose a template from the options and fill in your information to see your CV preview here.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CVPreview;
