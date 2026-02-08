import{j as e}from"./jsx-runtime-DFUhlNad.js";import{B as r}from"./badge-C70mRsol.js";import"./iframe-BuOWRVK8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";const m={title:"UI/Badge",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline"]}}},a={args:{children:"First Drive"}},s={args:{children:"News",variant:"secondary"}},n={args:{children:"Breaking",variant:"destructive"}},t={args:{children:"Review",variant:"outline"}},i={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{children:"Default"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"destructive",children:"Breaking"}),e.jsx(r,{variant:"outline",children:"Outline"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'First Drive'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'News',
    variant: 'secondary'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Breaking',
    variant: 'destructive'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Review',
    variant: 'outline'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Breaking</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
}`,...i.parameters?.docs?.source}}};const g=["Default","Secondary","Destructive","Outline","AllVariants"];export{i as AllVariants,a as Default,n as Destructive,t as Outline,s as Secondary,g as __namedExportsOrder,m as default};
