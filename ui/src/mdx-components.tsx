import { createGenerator } from "fumadocs-typescript";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { File, Folder, Files } from "fumadocs-ui/components/files";

const generator = createGenerator();

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    Folder,
    Files,
    File,
    AutoTypeTable: (props) => (
      <AutoTypeTable {...props} generator={generator} />
    ),
  };
}
