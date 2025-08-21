import ManagedNvidiaNimOptions from "./managed";
import RemoteNvidiaNimOptions from "./remote";

export default function NvidiaNimOptions({ settings }) {
  const version = "remote"; // static to "remote" when in docker version.
  return version === "remote" ? (
    <RemoteNvidiaNimOptions settings={settings} />
  ) : (
    <ManagedNvidiaNimOptions settings={settings} />
  );
}
