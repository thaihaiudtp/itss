
import { Internship, Application } from '@/data/internships';
import { cn } from '@/lib/utils';
import { Calendar, MapPin, Clock, Briefcase, BookmarkIcon, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface InternshipCardProps {
  internship: Internship;
  application?: Application;
  onSave?: (internshipId: string) => void;
  onApply?: (internshipId: string) => void;
}

const InternshipCard = ({
  internship,
  application,
  onSave,
  onApply,
}: InternshipCardProps) => {
  const {
    id,
    title,
    company,
    location,
    type,
    industry,
    description,
    postedDate,
    deadline,
    skills,
    salary,
    logo,
  } = internship;

  // Calculate days remaining until deadline
  const daysRemaining = () => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const dayCount = daysRemaining();
  
  // Format the posted date
  const formattedDate = new Date(postedDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  // Format the deadline date
  const formattedDeadline = new Date(deadline).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white rounded-lg border shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 rounded-md border">
              {logo ? (
                <AvatarImage src={logo} alt={company} className="object-cover" />
              ) : (
                <AvatarFallback className="rounded-md bg-primary/10 text-primary font-bold">
                  {company.charAt(0)}
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-muted-foreground">{company}</p>
            </div>
          </div>
          
          {application && (
            <Badge
              className={cn(
                "ml-auto",
                application.status === "applied" && "bg-blue-100 text-blue-800 hover:bg-blue-100",
                application.status === "interview" && "bg-amber-100 text-amber-800 hover:bg-amber-100",
                application.status === "offer" && "bg-green-100 text-green-800 hover:bg-green-100",
                application.status === "rejected" && "bg-red-100 text-red-800 hover:bg-red-100",
                application.status === "saved" && "bg-purple-100 text-purple-800 hover:bg-purple-100"
              )}
            >
              {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
            </Badge>
          )}
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
            <span className="ml-1 px-1.5 py-0.5 rounded text-xs bg-gray-100">
              {type}
            </span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Briefcase className="h-4 w-4" />
            <span>{industry}</span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Posted {formattedDate}</span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className={cn(
              dayCount < 7 && "text-red-600 font-medium",
              dayCount >= 7 && dayCount < 14 && "text-amber-600"
            )}>
              Deadline: {formattedDeadline}
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-secondary rounded-full text-primary-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-4">
          {salary && (
            <span className="text-sm font-medium text-primary">
              {salary}
            </span>
          )}
          
          <div className="flex gap-2 ml-auto">
            {!application || application.status === "saved" ? (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onSave?.(id)}
                >
                  <BookmarkIcon className="mr-1 h-4 w-4" />
                  {application?.status === "saved" ? "Saved" : "Save"}
                </Button>
                <Button
                  size="sm"
                  onClick={() => onApply?.(id)}
                >
                  Apply Now
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onApply?.(id)}
              >
                View Application
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
