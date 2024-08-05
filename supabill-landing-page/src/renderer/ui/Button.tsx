import { Button } from "@/components/ui/button";
type Props = {
  buttonTitle: string;
  clickAction: () => void;
};
export function ButtonNewYork({ buttonTitle, clickAction }: Props) {
  return (
    <Button color="#F1F5F9" onClick={clickAction} variant={"secondary"}>
      {buttonTitle}
    </Button>
  );
}
