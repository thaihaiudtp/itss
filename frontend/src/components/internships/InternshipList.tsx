
import { useState } from 'react';
import { Internship, Application } from '@/data/internships';
import InternshipCard from './InternshipCard';
import { toast } from 'sonner';

interface InternshipListProps {
  internships: Internship[];
  applications?: Application[];
  isLoading?: boolean;
  onSave?: (internshipId: string) => void;
  onApply?: (internshipId: string) => void;
}

const InternshipList = ({
  internships,
  applications = [],
  isLoading = false,
  onSave,
  onApply,
}: InternshipListProps) => {
  const getApplication = (internshipId: string) => {
    return applications.find(app => app.internshipId === internshipId);
  };

  const handleSave = (internshipId: string) => {
    if (onSave) {
      onSave(internshipId);
      toast.success("Internship saved to your list");
    }
  };

  const handleApply = (internshipId: string) => {
    if (onApply) {
      onApply(internshipId);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg border p-6 animate-pulse">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-md"></div>
              <div className="space-y-2">
                <div className="h-4 w-48 bg-gray-200 rounded"></div>
                <div className="h-3 w-32 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-2 w-full bg-gray-200 rounded"></div>
              <div className="h-2 w-full bg-gray-200 rounded"></div>
              <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
            </div>
            <div className="flex justify-end gap-2">
              <div className="h-8 w-20 bg-gray-200 rounded"></div>
              <div className="h-8 w-20 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (internships.length === 0) {
    return (
      <div className="bg-white rounded-lg border p-6 text-center">
        <h3 className="text-xl font-medium mb-2">No internships found</h3>
        <p className="text-muted-foreground">
          Try adjusting your filters or search criteria
        </p>
      </div>
    );
  }

  // Ensure we show all internships at once without re-fetching
  return (
    <div className="space-y-4">
      {internships.map((internship) => (
        <InternshipCard
          key={internship.id}
          internship={internship}
          application={getApplication(internship.id)}
          onSave={handleSave}
          onApply={handleApply}
        />
      ))}
    </div>
  );
};

export default InternshipList;
