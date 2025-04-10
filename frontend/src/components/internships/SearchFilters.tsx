
import { useState, useEffect } from 'react';
import { industries, skills, locations, companyTypes } from '@/data/internships';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SearchIcon, FilterIcon, XIcon } from 'lucide-react';

interface SearchFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  searchQuery: string;
  industry: string;
  location: string;
  skills: string[];
  companyType: string;
}

const SearchFilters = ({ onFilterChange }: SearchFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    industry: '',
    location: '',
    skills: [],
    companyType: '',
  });

  const [selectedSkill, setSelectedSkill] = useState('');

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, searchQuery: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFilters({ ...filters, [name]: value === 'all' ? '' : value });
  };
  

  const handleAddSkill = () => {
    if (selectedSkill && !filters.skills.includes(selectedSkill)) {
      setFilters({ ...filters, skills: [...filters.skills, selectedSkill] });
      setSelectedSkill('');
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setFilters({
      ...filters,
      skills: filters.skills.filter((s) => s !== skill),
    });
  };

  const handleClearFilters = () => {
    setFilters({
      searchQuery: '',
      industry: '',
      location: '',
      skills: [],
      companyType: '',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mb-6 animate-fade-in">
      <div className="flex items-center mb-4">
        <div className="relative flex-grow">
          <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search for internships..."
            className="pl-10"
            value={filters.searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <Button
          variant="outline"
          className="ml-2 flex items-center gap-1"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <FilterIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Filters</span>
        </Button>
      </div>

      {isExpanded && (
        <div className="space-y-4 pt-2 border-t">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select
                value={filters.industry}
                onValueChange={(value) => handleSelectChange('industry', value)}
              >
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Select
                value={filters.location}
                onValueChange={(value) => handleSelectChange('location', value)}
              >
                <SelectTrigger id="location">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyType">Company Type</Label>
              <Select
                value={filters.companyType}
                onValueChange={(value) => handleSelectChange('companyType', value)}
              >
                <SelectTrigger id="companyType">
                  <SelectValue placeholder="Select company type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Company Types</SelectItem>
                  {companyTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="skills">Skills</Label>
            <div className="flex items-center gap-2">
              <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                <SelectTrigger id="skills" className="flex-grow">
                  <SelectValue placeholder="Select skills" />
                </SelectTrigger>
                <SelectContent>
                  {skills.map((skill) => (
                    <SelectItem key={skill} value={skill}>
                      {skill}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                type="button"
                size="sm"
                onClick={handleAddSkill}
                disabled={!selectedSkill}
              >
                Add
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {filters.skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full flex items-center gap-1 text-sm"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="text-secondary-foreground/70 hover:text-secondary-foreground"
                  >
                    <XIcon className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearFilters}
              className="text-muted-foreground"
            >
              Clear filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
