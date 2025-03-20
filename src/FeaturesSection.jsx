import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MessageSquare, Sparkles, Zap } from "lucide-react";
import React from "react";

export default function FeaturesSection() {
  // App logos data for mapping
  const appLogos = [
    { id: 1, position: "top-[38px] -left-0.5" },
    { id: 2, position: "top-[38px] left-56" },
    { id: 3, position: "-top-0.5 left-[338px]" },
    { id: 4, position: "top-[111px] left-[338px]", text: "+50" },
    { id: 5, position: "top-28 left-28" },
    { id: 6, position: "-top-0.5 left-28" },
  ];

  // Task cards data
  const taskCards = [
    {
      id: 1,
      title: "Gather this week's complaints",
      description: "Gathering complaint emails of this week from your inbox",
      status: "Completed",
      completed: true,
      icon: "mail",
    },
    {
      id: 2,
      title: "Creating bug summary for devs",
      description: "Drafting a message to send into the developer channel",
      status: "In Progress",
      progress: 60,
      icon: "chat",
    },
  ];

  // Automation steps data
  const automationSteps = [
    { id: 1, alt: "App object" },
    { id: 2, alt: "App object" },
    { id: 3, alt: "App object" },
    { id: 4, alt: "App object" },
  ];

  return (
    <div className="flex flex-col max-w-[1312px] items-center gap-12 pt-20 pr-8 pb-20 pl-8 relative w-full flex-[0_0_auto] bg-colors-app-background">
      <h2 className="relative w-fit mt-[-1.00px] font-text-5xl-font-semibold font-[number:var(--text-5xl-font-semibold-font-weight)] text-variable-collection-sand-2 text-[length:var(--text-5xl-font-semibold-font-size)] tracking-[var(--text-5xl-font-semibold-letter-spacing)] leading-[var(--text-5xl-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-5xl-font-semibold-font-style)]">
        What is The Relay?
      </h2>

      <div className="flex-col gap-6 flex items-start relative self-stretch w-full flex-[0_0_auto]">
        {/* First Card - Single Hub */}
        <Card className="min-w-[360px] h-[424px] items-end gap-6 pt-6 pr-6 pb-6 pl-6 relative self-stretch w-full rounded-xl overflow-hidden [background:linear-gradient(270deg,rgba(72,68,52,0.2)_0%,rgba(173,165,127,0.5)_100%)] border-none">
          <CardContent className="flex flex-col max-w-[460px] items-start gap-2 relative flex-1 grow p-0">
            <Sparkles className="relative w-8 h-8" />
            <h3 className="relative self-stretch font-text-2xl-font-semibold font-[number:var(--text-2xl-font-semibold-font-weight)] text-colors-app-card-foreground text-[length:var(--text-2xl-font-semibold-font-size)] tracking-[var(--text-2xl-font-semibold-letter-spacing)] leading-[var(--text-2xl-font-semibold-line-height)] [font-style:var(--text-2xl-font-semibold-font-style)]">
              A single hub to get shit done
            </h3>

            <div className="flex flex-col items-start gap-2">
              <p className="relative self-stretch font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-[#eae8dd] text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
                Stop juggling apps and doing menial work over and over. With The
                Relay, chat directly with your favorite apps in one unified
                inbox.
              </p>

              <p className="relative self-stretch font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-[#eae8dd] text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
                Ask questions, give instructions, and automate everyday tasks,
                all effortlessly from your phone
              </p>
            </div>
          </CardContent>

          <div className="flex flex-col w-[716px] h-[376px] items-center justify-center gap-2.5 relative">
            <div className="relative w-[430px] h-[193px]">
              {appLogos.map((logo) => (
                <div
                  key={logo.id}
                  className={`flex flex-col w-[83px] h-[83px] items-center justify-center gap-[6.25px] p-[15px] absolute ${logo.position} bg-variable-collection-sand-7 rounded-[15px] border-[none] shadow-shimmer`}
                >
                  {logo.text ? (
                    <div className="relative w-fit [font-family:'Inter-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
                      {logo.text}
                    </div>
                  ) : (
                    <img
                      src=""
                      alt={`App Logo ${logo.id}`}
                      className="relative w-[50px] h-[50px]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="flex flex-wrap h-[656px] items-center gap-[24px_24px] relative self-stretch w-full">
          {/* Second Card - Apps Ready to Work */}
          <Card className="min-w-[360px] flex-1 grow flex flex-col h-[656px] items-start gap-6 pt-6 pr-6 pb-6 pl-6 relative rounded-xl overflow-hidden border-none [background:linear-gradient(270deg,rgba(72,68,52,0.2)_0%,rgba(173,165,127,0.5)_100%)]">
            <CardContent className="flex flex-col items-center justify-center relative flex-1 self-stretch w-full grow p-0">
              <div className="flex flex-col w-[409px] items-end gap-4 relative flex-[0_0_auto] bg-variable-collection-sand-7 rounded-[15px] border-[none] shadow-shimmer">
                <div className="inline-flex flex-col items-end gap-4 p-6 relative flex-[0_0_auto]">
                  <div className="relative w-[329px] h-[84px]">
                    <div className="flex flex-col max-w-[329px] w-[329px] items-end gap-1 p-3 relative bg-variable-collection-sand-7 rounded-xl">
                      <div className="relative self-stretch mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-neutrallightlightest text-[length:var(--body-m-font-size)] text-right tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] [font-style:var(--body-m-font-style)]">
                        Gather all customer complaint emails from this week and
                        send the technical ones to the devs in dev chat
                      </div>
                    </div>
                  </div>

                  {taskCards.map((task) => (
                    <div key={task.id} className="relative w-[361px]">
                      <div className="flex w-[361px] items-center gap-2.5 relative">
                        <div className="flex w-80 items-center gap-3 p-3 relative bg-variable-collection-sand-6 rounded-lg">
                          <div className="flex flex-col w-10 h-10 items-center justify-center gap-2.5 relative rounded-lg">
                            <img
                              src=""
                              alt={task.icon}
                              className="relative w-[30px] h-[30px]"
                            />
                          </div>

                          <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="relative self-stretch mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-variable-collection-sand-2 text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
                                {task.title}
                              </div>

                              <div className="text-variable-collection-grey-2 relative self-stretch font-body-XS font-[number:var(--body-XS-font-weight)] text-[length:var(--body-XS-font-size)] tracking-[var(--body-XS-letter-spacing)] leading-[var(--body-XS-line-height)] [font-style:var(--body-XS-font-style)]">
                                {task.description}
                              </div>
                            </div>

                            {task.completed ? (
                              <div className="text-variable-collection-sand-5 relative self-stretch font-body-XS font-[number:var(--body-XS-font-weight)] text-[length:var(--body-XS-font-size)] tracking-[var(--body-XS-letter-spacing)] leading-[var(--body-XS-line-height)] [font-style:var(--body-XS-font-style)]">
                                {task.status}
                              </div>
                            ) : (
                              <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                                <Progress
                                  value={task.progress}
                                  className="relative flex-1 grow h-1 bg-variable-collection-sand-7 rounded overflow-hidden"
                                />
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex w-6 h-6 items-center justify-center gap-2.5 relative">
                          {!task.completed && (
                            <img
                              src=""
                              alt="Interface icon"
                              className="relative w-3.5 h-3.5"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>

            <div className="flex flex-col max-w-[460px] w-[460px] items-start gap-2 relative flex-[0_0_auto]">
              <MessageSquare className="relative w-8 h-8" />
              <h3 className="relative self-stretch font-text-2xl-font-semibold font-[number:var(--text-2xl-font-semibold-font-weight)] text-colors-app-card-foreground text-[length:var(--text-2xl-font-semibold-font-size)] tracking-[var(--text-2xl-font-semibold-letter-spacing)] leading-[var(--text-2xl-font-semibold-line-height)] [font-style:var(--text-2xl-font-semibold-font-style)]">
                Your apps are ready to work for you
              </h3>

              <p className="relative self-stretch font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-variable-collection-sand-2 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
                Just give your requests, and watch as your apps work together
                intelligently to complete tasks. Say goodbye to manual labor and
                hello to effortless orchestration.
              </p>
            </div>
          </Card>

          {/* Third Card - Easy Automation */}
          <Card className="w-[608px] flex flex-col h-[656px] items-start gap-6 pt-6 pr-6 pb-6 pl-6 relative rounded-xl overflow-hidden border-none [background:linear-gradient(270deg,rgba(72,68,52,0.2)_0%,rgba(173,165,127,0.5)_100%)]">
            <CardContent className="relative self-stretch w-full h-[432px] p-0">
              <div className="relative w-[361px] h-[292px] top-[70px] left-[99px]">
                {automationSteps.map((step, index) => (
                  <img
                    key={step.id}
                    className={`${index > 0 ? `top-[${index * 76}px]` : "top-0"} absolute w-[361px] h-16 left-0`}
                    alt={step.alt}
                    src=""
                  />
                ))}
              </div>
            </CardContent>

            <div className="flex flex-col max-w-[460px] w-[460px] h-[152px] items-start gap-2 relative">
              <Zap className="relative w-8 h-8" />
              <h3 className="relative self-stretch font-text-2xl-font-semibold font-[number:var(--text-2xl-font-semibold-font-weight)] text-colors-app-card-foreground text-[length:var(--text-2xl-font-semibold-font-size)] tracking-[var(--text-2xl-font-semibold-letter-spacing)] leading-[var(--text-2xl-font-semibold-line-height)] [font-style:var(--text-2xl-font-semibold-font-style)]">
                Easy automation
              </h3>

              <p className="relative self-stretch font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-variable-collection-sand-2 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
                Automate Tasks: Create repeatable tasks for your apps to do as
                you want and The Relay handles the rest.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
