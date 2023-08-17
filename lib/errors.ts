import { toast } from "sonner";

export function handleServerActionError(error: any) {
  let errorMessages = [] as Error[];

  if (error instanceof Error) {
    const messages = JSON.parse(error.message) as Error[];
    errorMessages = messages;
  }

  errorMessages.forEach((error) => {
    toast.error(error.message, {
      
      description: "Please, check the data you provided and try again later.",
    });
  });
}
