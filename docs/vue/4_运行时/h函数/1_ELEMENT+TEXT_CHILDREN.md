# h 函数 ELEMENT + TEXT_CHILDREN

1. `h` 函数本身只处理了传入的参数
2. `createVNode` 是生成 `vnode` 的核心方法
3. 在 `createVNode` 中第一次生成的 `shapeFlag = ShapeFlags.ELEMENT`，表示：是一个 `Element` 类型
4. 在 `createBaseVnode` 中，生成了 `vnode` 对象，并切对 `shapeFlag` 进行了 `|=` 按位或赋值运算，最终得到 `shapeFlag = 9`，表示：**元素为 `ShapeFlags.ELEMENT`**，`children` 为 `TEXT`

## 代码

```html
<script>
  const { h } = Vue;

  const vnode = h(
    "div",
    {
      class: "test",
    },
    "hello render"
  );

  console.log(vnode);
</script>
```

## 按位或赋值运算

x |= y，等于 x = x | y

x += y, 等于 x = x + y

## 左移 (<<)

左移操作符 (<<) 将第一个操作数向左移动指定位数，左边超出的位数将会被清除，右边将会补零。

**举例：将 5 向左移 2 位**

```js
const a = 5; // 00000000000000000000000000000101
const b = 2;

console.log(a << b); // 00000000000000000000000000010100
// 转换为 10 进制: 20
```

**公式**

```js
x << y;
```

移动任意数字 x 至左边 y 位，得出 x \* 2 \*\* y。 所以例如：9 << 3 等价于 9 \* 2³ = 9 \* 8 = 72。

**Vue 中的 ShapeFlags**

```js
export const enum ShapeFlags {
	/**
	 * type = Element
	 */
	ELEMENT = 1,
	/**
	 * 函数组件
	 */
	FUNCTIONAL_COMPONENT = 1 << 1,
	/**
	 * 有状态（响应数据）组件
	 */
	STATEFUL_COMPONENT = 1 << 2,
	/**
	 * children = Text
	 */
	TEXT_CHILDREN = 1 << 3,
	/**
	 * children = Array
	 */
	ARRAY_CHILDREN = 1 << 4,
	/**
	 * children = slot
	 */
	SLOTS_CHILDREN = 1 << 5,
	/**
	 * 组件：有状态（响应数据）组件 | 函数组件
	 */
	COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT
}
```
