import "tsx/esm";
import { renderToStaticMarkup } from "react-dom/server";
import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(EleventyVitePlugin);
	eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
		key: "11ty.js",
		compile: function () {
			return async function (data) {
				let content = await this.defaultRenderer(data);
				return renderToStaticMarkup(content);
			};
		},
	});
    eleventyConfig.addTemplateFormats(["11ty.jsx", "11ty.ts", "11ty.tsx"]);
};