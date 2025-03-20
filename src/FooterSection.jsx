import React from "react";

const FooterSection = () => {
  // Footer navigation data
  const footerNavigation = [
    {
      title: "Product",
      links: [
        { name: "Join waitlist", href: "#" },
        { name: "Enterprise enquiry", href: "#" },
        { name: "Request an app", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "Discord", href: "#" },
        { name: "X", href: "#" },
        { name: "LinkedIn", href: "#" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-colors-app-background p-8">
      <div className="flex flex-wrap items-start gap-4 border-b border-colors-app-border pt-12 pb-24">
        {/* Logo */}
        <div className="inline-flex items-center gap-[5.74px] p-[4.3px]">
          <img
            className="h-[31.39px] w-[35.28px]"
            alt="The Relay Logo"
            src=""
          />
          <div className="w-fit font-medium text-[15.3px] tracking-[1.22px] text-variable-collection-grey-0-white [font-family:'Inter-Medium',Helvetica]">
            THE RELAY
          </div>
        </div>

        {/* Navigation columns */}
        {footerNavigation.map((category, index) => (
          <div
            key={index}
            className="flex min-w-[104px] flex-1 flex-col items-start justify-center gap-4"
          >
            <div className="mt-[-1.00px] h-[31px] self-stretch font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] text-colors-app-foreground [font-style:var(--text-sm-font-semibold-font-style)]">
              {category.title}
            </div>

            {category.links.map((link, linkIndex) => (
              <div
                key={linkIndex}
                className="self-stretch font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] text-colors-app-muted-foreground [font-style:var(--text-sm-font-normal-font-style)]"
              >
                {link.name}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Footer bottom section */}
      <div className="mt-4 flex items-start gap-4 self-stretch">
        <div className="mt-[-1.00px] flex-1 font-text-xs-font-normal font-[number:var(--text-xs-font-normal-font-weight)] text-[length:var(--text-xs-font-normal-font-size)] tracking-[var(--text-xs-font-normal-letter-spacing)] leading-[var(--text-xs-font-normal-line-height)] text-colors-app-muted-foreground [font-style:var(--text-xs-font-normal-font-style)]">
          © 2025 The Relay. All rights reserved.
        </div>

        <div className="inline-flex items-start gap-4">
          <div className="mt-[-1.00px] w-fit whitespace-nowrap font-text-xs-font-normal font-[number:var(--text-xs-font-normal-font-weight)] text-[length:var(--text-xs-font-normal-font-size)] tracking-[var(--text-xs-font-normal-letter-spacing)] leading-[var(--text-xs-font-normal-line-height)] text-colors-app-muted-foreground [font-style:var(--text-xs-font-normal-font-style)]">
            Privacy Policy
          </div>

          <div className="mt-[-1.00px] w-fit whitespace-nowrap font-text-xs-font-normal font-[number:var(--text-xs-font-normal-font-weight)] text-[length:var(--text-xs-font-normal-font-size)] tracking-[var(--text-xs-font-normal-letter-spacing)] leading-[var(--text-xs-font-normal-line-height)] text-colors-app-muted-foreground [font-style:var(--text-xs-font-normal-font-style)]">
            Terms of service
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
