/*
 ***** 已使用的子域名
 * *******************
 *
 * 目前以下子域名已经被启用
 * 提交一个 PR， 添加你想使用的的域名
 *
 *
 **** README
 * ***********
 *
 * KEY:         你提交的域名（如：`foo` 表示自定义子域名为 `foo.acg.ski`）
 *
 * VALUE:       以 Github 为例，`foo.github.io` 表示用户/组织的主页，
 *              或 `foo.github.io/bar` 表示项目主页，也可以绑定 Gitee、 CODING.NET 等其它代码托管服务商。
 *
 * CLOUDFLARE:  目前 ACG.SKI 使用的 DNS 服务商为 CloudFlare。默认情况下代理状态为`开启`（支持 SSL），
 *              开启状态下你可以通过 HTTPS 链接（如： https://foo.acg.ski ）进行访问。
 *              但如果你不希望通过 CloudFlare 进行站点加速，可以选择 `仅限 DNS` 选项，
 *              只需要在你提交的代码后面添加 `// noCF` 注释即可关闭CF站点加速。
 */

var cnames_active = {
  //记得对照查询你要使用的域名是否已存在或不可被注册（Ctrl+F 可快速查询）
  // 每次PR仅允许新增一个域名，每个账号每三个月仅允许新增一次（滥用PR将被拉黑）
  // 请在下方提示处添加新的域名
  "7doger": "7doger.github.io",
  "7doge": "7doger.github.io/7doger",
  "doge": "7doger.github.io/ACG.Ski"
  // 请在此行之上新增一行并提交 Pull Request
  //
  // 以下为本项目的保留域名，请勿修改
  '@': 'cname.acg.ski',
  'www': 'cname.acg.ski',
  'blog': 'cname.acg.ski',
  'cn': 'cname.acg.ski',
  'moe': 'cname.acg.ski',
  'acg': 'cname.acg.ski',
  'acgn': 'cname.acg.ski',
  'ski': 'cname.acg.ski',
  'nic': 'cname.acg.ski',
  'vup': 'cname.acg.ski',
  'vtb': 'cname.acg.ski',
  'bbs': 'cname.acg.ski',
  'forum': 'cname.acg.ski',
  'email': 'cname.acg.ski',
  'mail': 'cname.acg.ski',
  'cname': 'cname.acg.ski',
  'ns': 'cname.acg.ski',
  'cf': 'cname.acg.ski',
  'm': 'cname.acg.ski',
  'i': 'cname.acg.ski',
  't': 'cname.acg.ski'
}
