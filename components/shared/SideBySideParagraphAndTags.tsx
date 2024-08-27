"use client";
import Image from "next/image";
import { Checkbox } from "antd";
import React, { useState } from "react";
import { AssetsPr, Tags } from "@/constant/data";

const SideBySideParagraphAndTags = () => {
  return (
    <div className="flex gap-8 mx-auto max-w-[1440px] px-8">
      <div className="flex w-1/2">
        <div className="flex flex-col items-start text-left">
          <div className="mt-0">
            <h1 className="font-semibold leading-tight text-[calc(max(min(4vw,64px),42px))]">
              Your go-to
              <br />
              work platform
            </h1>
          </div>
          <div className="max-w-[min(max(32.5vw,320px),468px)]">
            <h2 className="text-[max(min(1.3vw,18px),16px)] leading-[160%]">
              Streamline workflows and gain clear visibility across teams to
              make strategic decisions with confidence.
            </h2>
            <br />
            <br />
          </div>
          <div className="flex flex-col items-start">
            <div className="relative">
              <form
                action="//auth.monday.com/users/sign_up_new?origin=hp_fullbg_page_header"
                data-origin="hp_fullbg_page_header"
                method="POST"
                noValidate
                className="flex flex-col">
                <div className="flex flex-col items-start">
                  <button
                    className="ladda-button signup-button bg-blue-500 text-white px-4 py-2 rounded-xl transition duration-200 ease-in-out transform hover:scale-105"
                    type="button">
                    Get Started
                  </button>
                  <div className="mt-3 text-sm text-gray-600">
                    No credit card needed&nbsp;&nbsp;✦&nbsp;&nbsp;Unlimited time
                    on Free plan
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-1/2 flex-col gap-4 relative">
        <TagsAndAssets />
      </div>
    </div>
  );
};

export default SideBySideParagraphAndTags;

const TagsAndAssets = () => {
  const animatedText = "What would you like to manage?";
  const [centered, setCentered] = useState(false);
  const [assets, setAssets] = useState(AssetsPr);
  const [tags, setTags] = useState<{text:string,isActive?:boolean,icon:JSX.Element,color:string}[]>(Tags);
  let HandelOnCheck = (text: string) => {
    setAssets((assets) =>
      assets.map((asset) => {
        return asset.alt === text
          ? { ...asset, isActive: true }
          : { ...asset, isActive: false };
      })
    );
    setTags((assets) =>
      assets.map((asset) => {
        return asset.text === text
          ? { ...asset, isActive: true }
          : { ...asset, isActive: false };
      })
    );
  };
  return (
    <div className="flex flex-col flex-1">
      <div className="relative flex flex-col gap-2 z-20">
        <div className="flex flex-col gap-4 p-6 rounded-lg border border-gray-200">
          <div className="text-2xl mb-4">
            <div className="text-3xl">
              {Array.from(animatedText).map((char, index) => (
                <span
                  key={index}
                  className="animated-word"
                  style={{ animationDelay: `${index * 0.05}s` }}>
                  {char === " " ? "\u00A0" : char}{" "}
                  {/* Use non-breaking space for spaces */}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {tags.map((tag, index) => (
              <div key={index} className="flex flex-col items-center space-x-2">
                <div>
                  <Checkbox
                    className={` checked:bg-[${tag.color}] text-white`}
                    name={tag.text}
                    value={tag.text}
                    onChange={(e) => HandelOnCheck(e.target.value)}
                  />
                </div>
                <div className={tag?.isActive?`text-[${tag.color}]`:""} >{tag.icon}</div>
                <div className="text">{tag.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="css-1h3p3yx">
          <div
            className={`assets-container transition-all duration-1000 ease-[ease] ${
              !centered && "ml-[10vw]"
            } relative z-[100] w-fit`}>
            {assets.map((asset, index) => (
              <div
                key={index}
                className={`picture-wrapper w-fit absolute top-0 left-0 transition-opacity duration-300 ease-in-out ${
                  asset.isActive
                    ? "opacity-100 z-[10000000] block"
                    : "opacity-0"
                }`}>
                <picture className="picture-component">
                  <Image
                    alt={asset.alt}
                    className="main-image"
                    src={`/images/${asset.src}`}
                    layout="responsive"
                    width={300}
                    height={200}
                    objectFit="cover"
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
