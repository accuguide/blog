import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { resolve } from "./src/sanity/lib/resolve";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
	projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
	dataset: import.meta.env.PUBLIC_SANITY_DATASET,
	plugins: [
		structureTool(),
		presentationTool({
			resolve,
			previewUrl: location.origin,
		}),
	],
	schema,
});
