import next from "eslint-config-next";

const nextConfigs = Array.isArray(next) ? next : [next];

const config = [
  { ignores: [".next/**", "node_modules/**", "out/**", "next-env.d.ts"] },
  ...nextConfigs,
];

export default config;
