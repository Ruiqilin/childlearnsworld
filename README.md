# childlearnsworld
Chinese version of 3D knowledge graph

# 课程分类数据集（中文翻译版）

本仓库是 [Marble Skill Taxonomy (v1)](https://github.com/withmarbleapp/os-taxonomy) 的**衍生作品**，基于原项目的数据文件（`topics.json`、`dependencies.json` 等）进行了**中文本地化翻译**，旨在方便中文用户使用。

## 数据来源与版权声明

本仓库所使用的原始数据来源于：

> **Marble Skill Taxonomy (v1)** · © Generative Spark, Inc. (Marble) · [https://withmarble.com](https://withmarble.com)

原始数据集（数据库结构、ID、关系及关联标准）依据 **ODbL 1.0** 协议授权；其中 Marble 原创的文本内容（如 `name`、`description`、`evidence`、`reason` 等）依据 **CC BY-SA 4.0** 协议授权。

本翻译版本属于上述原始数据库的**衍生数据库**，因此：

- 本仓库中的所有数据（包括翻译后的文本）同样以 **ODbL 1.0** 协议开放；
- 使用本数据时，您仍需**保留上方完整的署名声明**；
- 若您进一步修改本数据，也须以相同的 ODbL 协议公开您修改后的数据库。

## 与原始项目的差异

- 已将 `topics.json` 中所有 `name` 和 `description` 字段翻译为中文；
- 未修改任何 ID、依赖关系（`dependencies`）及标准关联（`standards`）结构；
- 未使用 `curriculum-standards.json` 中的完整标准描述文本（仅引用标准代码，如 `"ccss-ela:L.K.1f"`），故不涉及第三方上游许可证的额外义务。

## 使用说明

您可以自由地：
- 在商业或非商业项目中**使用**本数据集；
- 对数据进行**再修改**，但修改后的数据库必须同样以 ODbL 协议公开。

您**无需**开源使用本数据的项目源代码（这属于 ODbL 定义的“产出作品”例外）。

## 许可证

本仓库的数据部分（即所有 JSON 文件）遵循 **ODbL 1.0** 协议。完整的许可证文本请参见 [LICENSE](LICENSE) 文件（如有）或访问 [ODbL 官网](https://opendatacommons.org/licenses/odbl/)。

原始内容的 CC BY-SA 4.0 条款仍然适用于 Marble 原创文本的原始版本，但本翻译版本作为衍生数据库，整体遵循 ODbL。
