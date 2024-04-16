import { Platform, PlatformReadable } from "../config/types";
import { cn } from "../lib/utils";

export default function PlatformText({
  platform,
  width = 32,
  height = 32,
  className = "",
}: {
  platform: Platform;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div className="flex p-1 pl-0">
      <PlatformIcon
        platform={platform}
        className={cn("rounded-full bg-slate-300 p-1", className)}
        width={width}
        height={height}
      />
      <p className="p-1">{PlatformReadable(platform)}</p>
    </div>
  );
}
function PlatformIcon({
  platform,
  width = 32,
  height = 32,
  className = "",
}: {
  platform: Platform;
  width?: number;
  height?: number;
  className?: string;
}) {
  switch (platform) {
    case Platform.WINDOWS:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={width}
          height={height}
          viewBox="0 0 48 48"
          className={className}
        >
          <path
            fill="#00b0ff"
            d="M20 25.026L5.011 25 5.012 37.744 20 39.818zM22 25.03L22 40.095 42.995 43 43 25.066zM20 8.256L5 10.38 5.014 23 20 23zM22 7.973L22 23 42.995 23 42.995 5z"
          ></path>
        </svg>
      );
    case Platform.ANDROID:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={width}
          height={height}
          viewBox="0 0 48 48"
          className={className}
        >
          <path
            fill="#30dc80"
            d="M24,14.088C11.427,14.088,1.108,23.716,0,36h48C46.892,23.716,36.573,14.088,24,14.088z M33.179,27.079c0-1.104,0.895-1.999,1.999-1.999c1.104,0,1.999,0.895,1.999,1.999c0,1.104-0.895,1.999-1.999,1.999	C34.074,29.078,33.179,28.183,33.179,27.079z M12.822,29.078c-1.104,0-1.999-0.895-1.999-1.999c0-1.104,0.895-1.999,1.999-1.999	s1.999,0.895,1.999,1.999C14.821,28.183,13.926,29.078,12.822,29.078z"
          ></path>
          <path
            fill="#30dc80"
            d="M34.038,19.313c-0.14,0-0.281-0.035-0.41-0.11c-0.393-0.227-0.527-0.729-0.301-1.122l5.197-9.008	c0.227-0.394,0.729-0.529,1.122-0.301c0.393,0.227,0.527,0.729,0.301,1.122l-5.197,9.008C34.598,19.166,34.322,19.313,34.038,19.313	z"
          ></path>
          <path
            fill="#30dc80"
            d="M13.962,19.313c-0.284,0-0.56-0.148-0.712-0.411L8.054,9.894C7.827,9.501,7.962,8.999,8.354,8.772	c0.392-0.228,0.895-0.093,1.122,0.301l5.197,9.008c0.227,0.394,0.092,0.896-0.301,1.122C14.243,19.278,14.102,19.313,13.962,19.313z"
          ></path>
        </svg>
      );
    case Platform.IOS:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={width}
          height={height}
          viewBox="0 0 48 48"
          className={className}
        >
          <path
            fill="#42A5F5"
            d="M40.084,32.613c-0.848,1.835-1.254,2.655-2.342,4.274c-1.521,2.264-3.67,5.089-6.326,5.109c-2.361,0.018-2.971-1.507-6.176-1.482c-3.204,0.016-3.872,1.51-6.237,1.484c-2.654-0.022-4.688-2.568-6.21-4.826c-4.259-6.34-4.707-13.768-2.076-17.721c1.861-2.803,4.807-4.449,7.572-4.449c2.817,0,4.588,1.514,6.916,1.514c2.262,0,3.638-1.517,6.896-1.517c2.464,0,5.07,1.313,6.931,3.575C32.942,21.836,33.931,30.337,40.084,32.613z"
          ></path>
          <path
            fill="#42A5F5"
            d="M30.046,12.072c1.269-1.577,2.232-3.804,1.882-6.072c-2.069,0.138-4.491,1.418-5.905,3.075c-1.282,1.51-2.345,3.752-1.931,5.922C26.351,15.066,28.689,13.764,30.046,12.072z"
          ></path>
          <path
            fill="#1E88E5"
            d="M36.736,20.421C28,30.001,20,21.001,9.228,27.842c0.375,3.027,1.53,6.303,3.565,9.331c1.521,2.258,3.556,4.804,6.21,4.826c2.365,0.025,3.033-1.469,6.237-1.484c3.205-0.024,3.814,1.5,6.176,1.482c2.656-0.021,4.805-2.846,6.326-5.109c1.088-1.619,1.494-2.439,2.342-4.274C34.878,30.688,33.389,24.314,36.736,20.421z"
          ></path>
        </svg>
      );
  }
}
