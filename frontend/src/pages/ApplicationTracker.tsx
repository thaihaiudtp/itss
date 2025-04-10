import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { mockInternships, mockApplications, Internship, Application, ApplicationStatus } from '@/data/internships';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CircleCheck, Clock as CircleClock, CircleX, Clock, FileCheck } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface InternshipWithStatus extends Internship {
  status: ApplicationStatus;
  appliedDate?: string;
  notes?: string;
}

const ApplicationTracker = () => {
  const [applications, setApplications] = useState<Application[]>(mockApplications);
  
  // Transform the data to get internships with their status
  const getInternshipsWithStatus = (): InternshipWithStatus[] => {
    return applications.map(app => {
      const internship = mockInternships.find(i => i.id === app.internshipId);
      if (!internship) return {} as InternshipWithStatus;
      
      return {
        ...internship,
        status: app.status,
        appliedDate: app.appliedDate,
        notes: app.notes
      };
    }).filter(app => Object.keys(app).length > 0);
  };
  
  const internshipsWithStatus = getInternshipsWithStatus();
  
  const applied = internshipsWithStatus.filter(i => i.status === 'applied');
  const interviews = internshipsWithStatus.filter(i => i.status === 'interview');
  const offers = internshipsWithStatus.filter(i => i.status === 'offer');
  const rejected = internshipsWithStatus.filter(i => i.status === 'rejected');
  const saved = internshipsWithStatus.filter(i => i.status === 'saved');

  const getStatusBadge = (status: ApplicationStatus) => {
    switch (status) {
      case 'applied':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Applied</Badge>;
      case 'interview':
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Interview</Badge>;
      case 'offer':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Offer</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Rejected</Badge>;
      case 'saved':
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Saved</Badge>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-background py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Application Tracker</h1>
          
          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Total Applications</p>
                  <p className="text-3xl font-bold">
                    {applied.length + interviews.length + offers.length + rejected.length}
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="pt-6">
                <div className="text-center">
                  <FileCheck className="h-5 w-5 text-blue-500 mx-auto mb-1" />
                  <p className="text-sm text-blue-700">Applied</p>
                  <p className="text-2xl font-bold text-blue-800">{applied.length}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-50 border-amber-100">
              <CardContent className="pt-6">
                <div className="text-center">
                  <CircleClock className="h-5 w-5 text-amber-500 mx-auto mb-1" />
                  <p className="text-sm text-amber-700">Interviews</p>
                  <p className="text-2xl font-bold text-amber-800">{interviews.length}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-100">
              <CardContent className="pt-6">
                <div className="text-center">
                  <CircleCheck className="h-5 w-5 text-green-500 mx-auto mb-1" />
                  <p className="text-sm text-green-700">Offers</p>
                  <p className="text-2xl font-bold text-green-800">{offers.length}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-red-50 border-red-100">
              <CardContent className="pt-6">
                <div className="text-center">
                  <CircleX className="h-5 w-5 text-red-500 mx-auto mb-1" />
                  <p className="text-sm text-red-700">Rejected</p>
                  <p className="text-2xl font-bold text-red-800">{rejected.length}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Application Progress */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Applications Progress</CardTitle>
              <CardDescription>
                Track your success rate and application status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Application Success Rate</span>
                    <span className="text-sm text-muted-foreground">
                      {offers.length}/{applied.length + interviews.length + offers.length + rejected.length} ({Math.round(offers.length / (applied.length + interviews.length + offers.length + rejected.length || 1) * 100)}%)
                    </span>
                  </div>
                  <Progress value={offers.length / (applied.length + interviews.length + offers.length + rejected.length || 1) * 100} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Interview Rate</span>
                    <span className="text-sm text-muted-foreground">
                      {interviews.length + offers.length}/{applied.length + interviews.length + offers.length + rejected.length} ({Math.round((interviews.length + offers.length) / (applied.length + interviews.length + offers.length + rejected.length || 1) * 100)}%)
                    </span>
                  </div>
                  <Progress value={(interviews.length + offers.length) / (applied.length + interviews.length + offers.length + rejected.length || 1) * 100} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Application Tabs */}
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Applications</TabsTrigger>
              <TabsTrigger value="applied">Applied</TabsTrigger>
              <TabsTrigger value="interviews">Interviews</TabsTrigger>
              <TabsTrigger value="offers">Offers</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>All Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ApplicationTable applications={internshipsWithStatus} />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="applied" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Applied</CardTitle>
                </CardHeader>
                <CardContent>
                  <ApplicationTable applications={applied} />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="interviews" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Interviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <ApplicationTable applications={interviews} />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="offers" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Offers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ApplicationTable applications={offers} />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="rejected" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Rejected</CardTitle>
                </CardHeader>
                <CardContent>
                  <ApplicationTable applications={rejected} />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="saved" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Saved</CardTitle>
                </CardHeader>
                <CardContent>
                  <ApplicationTable applications={saved} />
                </CardContent>
              </Card>
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

interface ApplicationTableProps {
  applications: InternshipWithStatus[];
}

const ApplicationTable = ({ applications }: ApplicationTableProps) => {
  if (applications.length === 0) {
    return (
      <div className="text-center py-6">
        <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-30" />
        <h3 className="text-lg font-medium">No applications in this category</h3>
        <p className="text-muted-foreground">
          When you apply to internships, they will appear here
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Date Applied</TableHead>
            <TableHead>Deadline</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((app) => (
            <TableRow key={app.id}>
              <TableCell className="font-medium">{app.company}</TableCell>
              <TableCell>{app.title}</TableCell>
              <TableCell>
                {app.appliedDate ? new Date(app.appliedDate).toLocaleDateString() : 'Not applied'}
              </TableCell>
              <TableCell>
                {new Date(app.deadline).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {app.status === 'applied' && <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Applied</Badge>}
                {app.status === 'interview' && <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Interview</Badge>}
                {app.status === 'offer' && <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Offer</Badge>}
                {app.status === 'rejected' && <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Rejected</Badge>}
                {app.status === 'saved' && <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Saved</Badge>}
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicationTracker;
