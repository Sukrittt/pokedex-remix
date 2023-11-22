import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { regions } from "~/config";
import { Card, CardContent } from "~/components/ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
      className="grid gap-y-8"
    >
      <h1 className="text-center text-5xl font-extrabold">Regions</h1>
      <div className="grid grid-cols-2 gap-4 pt-12">
        {regions.map((region, index) => (
          <Link to={region.href} key={index}>
            <Card className="hover:bg-slate-100 transition h-[200px] flex items-center justify-center">
              <CardContent className="flex items-center justify-center pt-6">
                <p className="font-semibold text-lg">{region.label}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
