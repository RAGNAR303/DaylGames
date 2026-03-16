import { Label } from "../label";
import { BiSolidJoystickButton } from "react-icons/bi";
export function GameCard() {
  return (
    <Label>
      <button>
        <BiSolidJoystickButton />
      </button>
      <div>
        <input type="text" placeholder="Adicionar Jogo" />
      </div>
    </Label>
  );
}
