import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button";

function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <Button>
        Report an Issue
      </Button>

      <Button variant="secondary">
        <span className="flex items-center gap-2">
          Live Demo
          <ArrowRight size={18} />
        </span>
      </Button>

    </div>
  );
}

export default HeroButtons;