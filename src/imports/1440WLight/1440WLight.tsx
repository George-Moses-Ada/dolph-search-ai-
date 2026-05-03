import svgPaths from "./svg-xkr0ows8c5";

function Svg() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="55180d">
          <path d={svgPaths.p12397680} fill="var(--fill-0, #0D0D0D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonOpenSidebar() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button - Open sidebar">
      <Svg />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0" data-name="Container">
      <ButtonOpenSidebar />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex h-[52px] items-center justify-center left-0 top-0" data-name="Container">
      <Container3 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="3a5c87">
          <path d={svgPaths.p3e73da00} fill="var(--fill-0, #0D0D0D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#e8e8e8] max-w-[40px] min-h-[35px] relative rounded-[10px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center max-w-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] min-h-[inherit] px-[10px] py-[7.5px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ac6d36">
          <path d={svgPaths.p17e3d600} fill="var(--fill-0, #0D0D0D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg2 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="max-w-[40px] min-h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center max-w-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] min-h-[inherit] px-[10px] py-[8.5px] relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="266724">
          <path d={svgPaths.p17969200} fill="var(--fill-0, #0D0D0D)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p27ea8f00} fill="var(--fill-0, #0D0D0D)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p2d04e700} fill="var(--fill-0, #0D0D0D)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg3 />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="max-w-[40px] min-h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center max-w-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] min-h-[inherit] pb-[8.5px] pt-[7.5px] px-[10px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] relative shrink-0 w-[52px]" data-name="Container">
      <Link />
      <HorizontalBorder />
      <Link1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[8px] top-[52px]" data-name="Margin">
      <Container4 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="d13764">
          <path d={svgPaths.p30122c00} fill="var(--fill-0, #0D0D0D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(143,143,143,0.2)] content-stretch flex items-center justify-center relative rounded-[33554400px] shrink-0 size-[24px]" data-name="Overlay">
      <Svg4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Overlay />
      </div>
    </div>
  );
}

function ButtonMenuOpenProfileMenu() {
  return (
    <div className="content-stretch flex items-center min-h-[40px] pb-[8.5px] pl-[8px] pr-[6px] pt-[7.5px] relative rounded-[10px] shrink-0" data-name="Button menu - Open profile menu">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container8 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[4px] pl-[8px] pr-[6px] top-[850px]" data-name="Margin">
      <ButtonMenuOpenProfileMenu />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bottom-0 left-0 opacity-0 top-0 w-[52px]" data-name="Container">
      <Container2 />
      <Margin />
      <Margin1 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="266724">
          <path d={svgPaths.p17969200} fill="var(--fill-0, #0D0D0D)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p27ea8f00} fill="var(--fill-0, #0D0D0D)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p2d04e700} fill="var(--fill-0, #0D0D0D)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg5 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[13.9px] w-full">
        <p className="leading-[20px]">Images</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="max-w-[248px] min-h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center max-w-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center max-w-[inherit] min-h-[inherit] pb-[8.5px] pt-[7.5px] px-[10px] relative size-full">
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[260px] min-h-[36px] px-[6px] right-0 top-[132px]" data-name="Link:margin">
      <Link2 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ac4202">
          <path d={svgPaths.p362e7f80} fill="var(--fill-0, #0D0D0D)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3d28e00} fill="var(--fill-0, #0D0D0D)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container14 />
        <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">See plans and pricing</p>
        </div>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="max-w-[248px] min-h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center max-w-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] min-h-[inherit] pb-[8.5px] pt-[7.5px] px-[10px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="44c6db">
          <path d={svgPaths.p3a029e00} fill="var(--fill-0, #0D0D0D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg7 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="max-w-[248px] min-h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center max-w-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center max-w-[inherit] min-h-[inherit] pb-[8.5px] pt-[7.5px] px-[10px] relative size-full">
          <Container15 />
          <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ab0e8b">
          <path d={svgPaths.p15667800} fill="var(--fill-0, #0D0D0D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Help</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="max-w-[248px] min-h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center max-w-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] min-h-[inherit] pb-[8.5px] pt-[7.5px] px-[10px] relative size-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[6px] relative size-full">
        <Link3 />
        <HorizontalBorder1 />
        <HorizontalBorder2 />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[6px] pt-[12px] right-0 top-[569px]" data-name="Margin">
      <Container12 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[13.9px] w-full">
        <p className="leading-[20px]">Get responses tailored to you</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8f8f8f] text-[13.8px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">{`Log in to get answers based on your inputs, plus  upload files.`}</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2563eb] min-h-[44px] relative rounded-[33554400px] shrink-0 w-[232px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center min-h-[inherit] px-[16px] py-[11px] relative size-full">
        <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[20px]">Log in</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col gap-[24px] items-center pb-[20px] pointer-events-auto pt-[21px] px-[20px] sticky top-0" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(13,13,13,0.15)] border-solid border-t inset-0 pointer-events-none" />
      <Container19 />
      <Button />
    </div>
  );
}

function Svg9() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="3a5c87">
          <path d={svgPaths.p3e73da00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.9px] text-white whitespace-nowrap">
        <p className="leading-[20px]">New chat</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function RectangleAlignStretch() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
      <div className="h-full min-w-[16px] shrink-0 w-[16px]" data-name="Rectangle" />
    </div>
  );
}

function ItemLink() {
  return (
    <div className="bg-[#2563eb] max-w-[248px] min-h-[35px] relative rounded-[10px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center max-w-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] min-h-[inherit] px-[10px] py-[6px] relative size-full">
          <Container22 />
          <div className="flex flex-row items-center self-stretch">
            <RectangleAlignStretch />
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ac6d36">
          <path d={svgPaths.p17e3d600} fill="var(--fill-0, #0D0D0D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg10 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[13.9px] whitespace-nowrap">
        <p className="leading-[20px]">History</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function RectangleAlignStretch1() {
  return (
    <div className="h-full relative shrink-0" data-name="Rectangle:align-stretch">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <div className="h-[23px] min-w-[16px] shrink-0 w-[16px]" data-name="Rectangle" />
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="max-w-[248px] min-h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Item">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center max-w-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] min-h-[inherit] px-[10px] py-[6px] relative size-full">
          <Container25 />
          <div className="flex flex-row items-center self-stretch">
            <RectangleAlignStretch1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-px items-start px-[6px] relative size-full">
        <ItemLink />
        <Item />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-start pointer-events-auto pt-[8px] sticky top-0" data-name="Background">
      <List />
      <div className="absolute bg-[#f9f9f9] bottom-[-6px] h-[6px] left-0 opacity-0 right-0" data-name="Background" />
    </div>
  );
}

function Others() {
  return (
    <div className="absolute inset-[11.36%_4.26%_11.34%_4.26%]" data-name="others">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.9349 27.8278">
        <g id="others">
          <g id="6">
            <mask fill="white" id="path-1-inside-1_1_253">
              <path d={svgPaths.pafd8c00} />
            </mask>
            <path d={svgPaths.pafd8c00} fill="var(--fill-0, #FEFEFE)" mask="url(#path-1-inside-1_1_253)" stroke="var(--stroke-0, #9EA9FB)" strokeOpacity="0.15" strokeWidth="0.2" />
          </g>
          <path d={svgPaths.p17ee0e80} fill="var(--fill-0, #2563EB)" id="2" />
          <path d={svgPaths.p39108700} fill="var(--fill-0, #DBEAFE)" id="8" />
          <path d={svgPaths.p31950f00} fill="var(--fill-0, #434348)" id="7" />
          <path d={svgPaths.p1777980} fill="var(--fill-0, #FEFEFE)" id="6_2" />
          <path d={svgPaths.p3212c800} fill="var(--fill-0, #434348)" id="7_2" />
          <path d={svgPaths.p18820600} fill="var(--fill-0, #434348)" id="7_3" />
          <path d={svgPaths.p257326e0} fill="var(--fill-0, #FEFEFE)" id="6_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(158,169,251,0.13)] overflow-clip relative rounded-[10px] shrink-0 size-[36px]" data-name="Frame">
      <Others />
    </div>
  );
}

function Svg11() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="836f7a">
          <path d={svgPaths.p164c6c80} fill="var(--fill-0, #8F8F8F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonCloseSidebar() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button - Close sidebar">
      <Svg11 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <ButtonCloseSidebar />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[52px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame />
      <Container29 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-start pointer-events-auto px-[8px] sticky top-0" data-name="Background">
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[2.5px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-center tracking-[-0.27px] whitespace-nowrap">
        <p className="leading-[14px]">Dolph Search</p>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ba3792">
          <path d={svgPaths.p5cbb200} fill="var(--fill-0, #8F8F8F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonMenuModelSelector() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[4px] items-end justify-center left-[44px] min-h-[36px] pl-[4px] pr-[10px] py-[3px] rounded-[8px] top-[calc(50%-423.75px)]" data-name="Button menu - Model selector">
      <Container30 />
      <Svg12 />
    </div>
  );
}

function NavChatHistory() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-auto relative w-full" data-name="Nav - Chat history">
      <LinkMargin />
      <Margin2 />
      <div className="absolute h-[205px] inset-[695px_0_0_0] pointer-events-none">
        <BackgroundHorizontalBorder />
      </div>
      <div className="absolute h-[848px] inset-[52px_0_0_0] pointer-events-none">
        <Background1 />
      </div>
      <div className="absolute h-[900px] inset-0 pointer-events-none">
        <Background2 />
      </div>
      <ButtonMenuModelSelector />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-x-clip overflow-y-auto relative w-[260px]" data-name="Background">
      <NavChatHistory />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Container1 />
        <Background />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="bg-[#f9f9f9] h-full relative shrink-0 w-[260px] z-[2]" data-name="Background+VerticalBorder">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip pr-px relative rounded-[inherit] size-full">
        <Container />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(13,13,13,0.05)] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container32() {
  return <div className="flex-[1_0_0] h-[36.5px] min-w-px" data-name="Container" />;
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Log in</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#2563eb] content-stretch flex items-center justify-center min-h-[34px] px-[12px] py-[7px] relative rounded-[33554400px] shrink-0" data-name="Button">
      <Container37 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-h-[36px] px-[13px] py-[8px] relative rounded-[33554400px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[13.9px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Sign up for free</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[9px] items-center justify-center pl-px relative shrink-0" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container36 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-x-clip overflow-y-auto relative shrink-0" data-name="Container">
      <Container35 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-x-clip overflow-y-auto pl-[12px] relative shrink-0" data-name="Container">
      <Container34 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[52px] shrink-0 sticky top-0 w-full z-[2]" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Container32 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[46.9px] text-center whitespace-nowrap">
        <p className="leading-[48px]">Dolph Search</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[18.6px] text-center w-[768px]">
        <p className="leading-[28px]">{`Get evidence-based answers from academic papers, citations etc. with AI-powered research assistance `}</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip py-[2px] relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">{`Ask a research question (e.g., 'Does intermittent fasting improve metabolic health?')`}</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[48px] relative rounded-[8px] shrink-0 w-[521px]" data-name="Input">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[17px] py-[13px] relative rounded-[inherit] size-full">
        <Container41 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-[78px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip py-[2px] relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
          <p className="leading-[normal]">All Search</p>
        </div>
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="ba3792">
            <path d={svgPaths.p5cbb200} fill="var(--fill-0, black)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[48px] relative rounded-[8px] shrink-0 w-[149px]" data-name="Input">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[17px] py-[13px] relative rounded-[inherit] size-full">
        <Container42 />
        <Svg13 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p99f0820} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#2563eb] content-stretch flex gap-[8px] h-[48px] items-center px-[32px] relative rounded-[8px] shrink-0" data-name="Button">
      <Svg14 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15.4px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Search</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Input />
      <Input1 />
      <Button3 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[296px] items-center justify-center relative shrink-0 w-[1150px]" data-name="Container">
      <Heading />
      <Container40 />
      <Frame1 />
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p6b7a180} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Background">
      <Svg15 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.4px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">AI-Powered Search</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[15.1px] text-center whitespace-nowrap">
        <p className="leading-[24px] mb-0">Search millions of academic papers from</p>
        <p className="leading-[24px]">PubMed, arXiv, Semantic Scholar, and more</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] col-1 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[24px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.34px_0_0] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <Background4 />
          <Heading2 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p2cae8b00} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Background">
      <Svg16 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.6px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">Evidence Analysis</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14.9px] text-center whitespace-nowrap">
        <p className="leading-[24px] mb-0">Get consensus answers with confidence scores</p>
        <p className="leading-[24px]">based on multiple research studies</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] col-2 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[24px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.33px_0_0] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <Background6 />
          <Heading3 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p13de4200} id="Vector" stroke="var(--stroke-0, #9333EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#f3e8ff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Background">
      <Svg17 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.8px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">Fast Results</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14.9px] text-center whitespace-nowrap">
        <p className="leading-[24px] mb-0">Get comprehensive answers with citations in</p>
        <p className="leading-[24px]">seconds, not hours</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] col-3 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[24px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.34px_0_0] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <Background8 />
          <Heading4 />
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_200px] h-[200px] relative shrink-0 w-full" data-name="Container">
      <Background3 />
      <Background5 />
      <Background7 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[29.1px] text-center whitespace-nowrap">
        <p className="leading-[36px]">How It Works</p>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#2563eb] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">1</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.6px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">Ask Question</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[13px] text-center w-[172px]">
        <p className="leading-[20px]">Type your research question in natural language</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] col-1 content-stretch flex flex-col gap-[8px] h-[154px] items-center justify-self-stretch relative rounded-[10px] row-1 self-start shrink-0" data-name="Container">
      <Background9 />
      <Heading5 />
      <Container50 />
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#2563eb] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">2</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.6px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">Search Papers</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[162px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[13.2px] text-center w-full">
        <p className="leading-[20px]">AI searches multiple academic databases simultaneously</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] col-2 content-stretch flex flex-col gap-[8px] h-[154px] items-center justify-self-stretch relative rounded-[10px] row-1 self-start shrink-0" data-name="Container">
      <Background10 />
      <Heading6 />
      <Container52 />
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#2563eb] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">3</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.4px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">Analyze Evidence</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[178px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[12.9px] text-center w-[178px]">
        <p className="leading-[20px]">Extract key findings and detect consensus across studies</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] col-3 content-stretch flex flex-col gap-[8px] h-[154px] items-center justify-self-stretch relative rounded-[10px] row-1 self-start shrink-0" data-name="Container">
      <Background11 />
      <Heading7 />
      <Container54 />
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#2563eb] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.3px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">4</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[15.4px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">Get Answer</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col h-[61px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[13.1px] text-center w-[200px]">
        <p className="leading-[20px]">{`Receive evidence-based answer with citations & download to file`}</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] col-4 content-stretch flex flex-col gap-[8px] h-[154px] items-center justify-self-stretch relative rounded-[10px] row-1 self-start shrink-0" data-name="Container">
      <Background12 />
      <Heading8 />
      <Container56 />
    </div>
  );
}

function Container48() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_120px] h-[154px] max-w-[896px] relative shrink-0 w-[896px]" data-name="Container">
      <Container49 />
      <Container51 />
      <Container53 />
      <Container55 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[222px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container48 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[799px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container43 />
      <Container47 />
    </div>
  );
}

function Main() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-[10px] w-full z-[1]" data-name="Main">
      <Container38 />
    </div>
  );
}

function Container31() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative z-[1]" data-name="Container">
      <div className="overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col isolate items-start px-[15px] relative size-full">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default function Component1440WLight() {
  return (
    <div className="bg-white content-stretch flex isolate items-start relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="1440w light">
      <BackgroundVerticalBorder />
      <Container31 />
    </div>
  );
}