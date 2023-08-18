import { getCurrentUser } from "@/lib/session";

import { User } from "@nextui-org/user";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";

import { UserInformationActions } from "@/components/navigation/logout";

export async function UserInformation() {
  const information = await getCurrentUser();

  return (
    <UserInformationActions>
      <Button variant="light" radius="full" className="h-auto justify-start px-2">
        <User
          name={information?.name}
          description={"@" + information?.username}
          className="justify-start my-2"
          avatarProps={{ src: String(information?.image) }}
        />
      </Button>
    </UserInformationActions>
  );
}

export async function MiddleSizeUserInformation() {
  const information = await getCurrentUser();

  return (
    <UserInformationActions>
      <Button variant="light" radius="full" className="h-auto justify-start w-fit">
        <Avatar src={String(information?.image)} />
      </Button>
    </UserInformationActions>
  );
}
