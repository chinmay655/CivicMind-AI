import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Badge from "../components/ui/Badge";
function Playground() {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-4xl space-y-8 rounded-3xl bg-white p-10 shadow">

        <h1 className="text-4xl font-bold">
          CivicMind UI Kit
        </h1>

        <Button>
          Primary Button
        </Button>

        <Button variant="secondary">
          Secondary Button
        </Button>

        <Input
          label="Email"
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
        <div className="space-x-3">
            <Badge>Open</Badge>

        <Badge color="green">
            Completed
        </Badge>

        <Badge color="red">
            Critical
        </Badge>

        <Badge color="yellow">
            Pending
        </Badge>
    </div>
      </div>
    </div>
  );
}

export default Playground;