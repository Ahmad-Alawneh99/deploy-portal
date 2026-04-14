import { Button } from '../ui/button';
import { Card, CardContent, CardTitle } from '../ui/card';

export const ProjectCard = () => {
  return (
    <Card className="p-4 min-w-[300px] border-l-5 border-green-500">
      <CardTitle className="text-[28px]">Project Name</CardTitle>
      <CardContent>
        <p>Deployed branch: Branch name</p>
        <p>Status: Active on port</p>
        <p>Last deployment: </p>
        <Button className="w-full" size="lg">View</Button>
      </CardContent>
    </Card>
  );
};
