import { Outlet } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui";

export function DefaultLayout() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">My Picture Diary</CardTitle>
            </CardHeader>
            <CardContent>
              <Outlet />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
