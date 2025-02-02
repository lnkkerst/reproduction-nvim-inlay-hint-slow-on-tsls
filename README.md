# nvim inlay hint so slow

Please ensure to enable inlay hint:

```lua
lspconfig.ts_ls.setup({
  settings = {
    typescript = {
      inlayHints = {
        includeInlayParameterNameHints = "all", -- Important!
        includeInlayParameterNameHintsWhenArgumentMatchesName = false,
        includeInlayFunctionParameterTypeHints = true,
        includeInlayVariableTypeHints = true,
        includeInlayVariableTypeHintsWhenTypeMatchesName = false,
        includeInlayPropertyDeclarationTypeHints = true,
        includeInlayFunctionLikeReturnTypeHints = true,
        includeInlayEnumMemberValueHints = true,
      },
    },
  },
})
```

```sh
# use any package manager
npm install
yarn install
pnpm install
bun install
```

Open `src/index.ts` and start coding...
