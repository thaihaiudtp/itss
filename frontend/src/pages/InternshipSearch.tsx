
import { useState, useEffect} from 'react';
import { mockInternships, mockApplications, Internship, Application } from '@/data/internships';
import SearchFilters, { FilterState } from '@/components/internships/SearchFilters';
import InternshipList from '@/components/internships/InternshipList';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowUpIcon, ArrowDownIcon, BookmarkIcon } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const InternshipSearch = () => {
  const navigate = useNavigate();
  const [filteredInternships, setFilteredInternships] = useState<Internship[]>(mockInternships);
  const [applications, setApplications] = useState<Application[]>(mockApplications);
  const [sortField, setSortField] = useState<'postedDate' | 'deadline'>('postedDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filterState, setFilterState] = useState<FilterState>({
    searchQuery: '',
    industry: '',
    location: '',
    skills: [],
    companyType: '',
  });
  
  const handleFilterChange = (filters: FilterState) => {
    setFilterState(filters);
  };

  const handleSave = (internshipId: string) => {
    const existingApp = applications.find((app) => app.internshipId === internshipId);
    
    if (existingApp) {
      // If already saved, remove it
      setApplications(applications.filter((app) => app.internshipId !== internshipId));
    } else {
      // If not saved, add it
      setApplications([
        ...applications,
        {
          internshipId,
          status: 'saved',
        },
      ]);
    }
  };

  const handleApply = (internshipId: string) => {
    const existingApp = applications.find((app) => app.internshipId === internshipId);
    
    if (existingApp && existingApp.status === 'saved') {
      // Update status from saved to applied
      setApplications(
        applications.map((app) =>
          app.internshipId === internshipId
            ? { ...app, status: 'applied', appliedDate: new Date().toISOString().split('T')[0] }
            : app
        )
      );
      toast.success('Application submitted successfully!');
    } else if (!existingApp) {
      // Create new application
      setApplications([
        ...applications,
        {
          internshipId,
          status: 'applied',
          appliedDate: new Date().toISOString().split('T')[0],
        },
      ]);
      toast.success('Application submitted successfully!');
    } else {
      // Navigate to application tracking for existing applications
      navigate('/applications');
    }
  };

  const toggleSort = (field: 'postedDate' | 'deadline') => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };
  useEffect(() => {
    setIsLoading(true);
  
    const timer = setTimeout(() => {
      let results = [...mockInternships];
  
      // Filter theo search
      if (filterState.searchQuery) {
        const query = filterState.searchQuery.toLowerCase();
        results = results.filter(
          (internship) =>
            internship.title.toLowerCase().includes(query) ||
            internship.company.toLowerCase().includes(query) ||
            internship.description.toLowerCase().includes(query)
        );
      }
  
      // Filter theo industry
      if (filterState.industry) {
        results = results.filter((internship) => internship.industry === filterState.industry);
      }
  
      // Filter theo location
      if (filterState.location) {
        results = results.filter((internship) =>
          internship.location === filterState.location ||
          (filterState.location === 'Remote' && internship.type === 'remote')
        );
      }
  
      // Filter theo skills
      if (filterState.skills.length > 0) {
        results = results.filter((internship) =>
          filterState.skills.some((skill) => internship.skills.includes(skill))
        );
      }
  
      // Filter theo saved
      if (showSavedOnly) {
        const savedIds = applications
          .filter((app) => app.status === 'saved')
          .map((app) => app.internshipId);
        results = results.filter((internship) => savedIds.includes(internship.id));
      }
  
      // Sort
      results.sort((a, b) => {
        if (sortDirection === 'asc') {
          return new Date(a[sortField]).getTime() - new Date(b[sortField]).getTime();
        } else {
          return new Date(b[sortField]).getTime() - new Date(a[sortField]).getTime();
        }
      });
  
      setFilteredInternships(results);
      setIsLoading(false);
    }, 300);
  
    return () => clearTimeout(timer); // Clear timeout nếu component bị unmount hoặc dependencies thay đổi
  }, [filterState, showSavedOnly, sortField, sortDirection, applications]);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-background py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Find Your Perfect Internship</h1>
          
          <SearchFilters onFilterChange={handleFilterChange} />
          
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-muted-foreground">
              Showing {filteredInternships.length} internships
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className={`gap-1 ${showSavedOnly ? 'text-primary' : ''}`}
                onClick={() => {
                  setShowSavedOnly(!showSavedOnly);
                  handleFilterChange({
                    searchQuery: '',
                    industry: '',
                    location: '',
                    skills: [],
                    companyType: '',
                  });
                }}
              >
                <BookmarkIcon className="h-4 w-4" />
                {showSavedOnly ? 'Show All' : 'Saved Only'}
              </Button>
              
              <div className="flex items-center gap-1">
                <span className="text-sm text-muted-foreground mr-1">Sort:</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`gap-1 ${sortField === 'postedDate' ? 'text-primary' : ''}`}
                  onClick={() => toggleSort('postedDate')}
                >
                  Date Posted
                  {sortField === 'postedDate' && (
                    sortDirection === 'asc' ? (
                      <ArrowUpIcon className="h-3 w-3" />
                    ) : (
                      <ArrowDownIcon className="h-3 w-3" />
                    )
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`gap-1 ${sortField === 'deadline' ? 'text-primary' : ''}`}
                  onClick={() => toggleSort('deadline')}
                >
                  Deadline
                  {sortField === 'deadline' && (
                    sortDirection === 'asc' ? (
                      <ArrowUpIcon className="h-3 w-3" />
                    ) : (
                      <ArrowDownIcon className="h-3 w-3" />
                    )
                  )}
                </Button>
              </div>
            </div>
          </div>
          
          <InternshipList
            internships={filteredInternships}
            applications={applications}
            isLoading={isLoading}
            onSave={handleSave}
            onApply={handleApply}
          />
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

export default InternshipSearch;
