import { Button } from "@mui/material";
import { CardContent } from "@mui/material";
//import { Card, CardContent } from "@/components/ui/card";
import {
  BriefcaseIcon,
  ClipboardIcon,
  FileIcon,
  LayoutGridIcon,
  MessageSquareIcon,
} from "lucide-react";
import React from "react";

export default function ServicesSection() {
  return (
    <section className="flex flex-col items-center gap-12 py-20 px-8 w-full bg-colors-app-background">
      <h2 className="text-5xl font-semibold text-[#eae8dd] tracking-tight">
        A new way to get work done
      </h2>

      <div className="flex flex-col items-start gap-6 w-full max-w-[1248px]">
        <Card className="w-full rounded-[15px] overflow-hidden bg-gradient-to-l from-[rgba(72,68,52,0.2)] to-[rgba(173,165,127,0.5)] border-none">
          <CardContent className="p-0">
            <div className="relative pt-24 pb-24 px-8 flex flex-col items-center">
              {/* App icons floating above the text */}
              <div className="absolute top-0 w-full flex justify-center">
                <div className="relative h-[252px] w-full max-w-[1087px] flex items-center justify-center">
                  <FileIcon className="absolute left-[20%] top-[30%] text-white h-10 w-10" />
                  <MessageSquareIcon className="absolute left-[35%] top-[40%] text-white h-10 w-10" />
                  <ClipboardIcon className="absolute left-[50%] top-[25%] text-white h-10 w-10" />
                  <LayoutGridIcon className="absolute left-[65%] top-[45%] text-white h-10 w-10" />
                  <BriefcaseIcon className="absolute left-[80%] top-[35%] text-white h-10 w-10" />
                </div>
              </div>

              <div className="flex flex-col items-center gap-12 max-w-[760px] pt-44">
                <h3 className="text-[64px] font-semibold text-[#eae8dd] text-center leading-[64px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                  Make work great again
                </h3>
                <p className="text-xl text-[#eae8dd] text-center leading-7 max-w-[693px]">
                  Work shouldn't be about endless emails and repetitive admin.{" "}
                  <br />
                  With The Relay, you can easily chat with and coordinate tasks
                  across all your apps. Take control, simplify and reclaim your
                  time and brain power.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full h-[555px] rounded-[15px] overflow-hidden bg-gradient-to-l from-[rgba(72,68,52,0.2)] to-[rgba(173,165,127,0.5)] border-none">
          <CardContent className="h-full flex items-center justify-center p-8">
            <div className="flex flex-col items-center gap-12 max-w-[760px]">
              <h3 className="text-[64px] font-semibold text-[#eae8dd] text-center leading-[64px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                Just say the word and it will be done
              </h3>
              <p className="text-xl text-center leading-7 max-w-[693px]">
                <span className="text-[#eae8dd]">
                  The Relay is powered by MCP (Model Context Protocol),
                  <br /> an open source, secure and standard connector between
                  apps that will allow you to command them with The Relay's
                  inbuilt agent called{" "}
                </span>
                <span className="font-semibold text-[#f8f7f3]">Spark</span>
                <span className="text-[#eae8dd]">. </span>
              </p>
              <Button className="w-[300px] h-12 rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.2)] bg-gradient-to-b from-[rgba(248,247,244,1)] to-[rgba(154,148,118,1)] text-[#484434] hover:opacity-90">
                Join Waitlist
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
