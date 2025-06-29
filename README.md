# S3 + CloudFront + OAC Static Website Hosting Template

![名称未設定ファイル drawio (1)](https://github.com/user-attachments/assets/15aa5d9f-0c4c-4465-8153-a8684621c54a)

## 前提条件

- AWS CLI が設定済みであること
- AWS CDK がインストール済みであること
- 必要な AWS 権限が設定されていること

## デプロイ手順

### 1. インフラストラクチャのデプロイ

AWS CDK を使用してインフラストラクチャをデプロイします。

```bash
cdk deploy
```

### 2. `S3CfOasStack.WebsiteURL` を確認

出力されている URL にアクセスしてページが表示されること（CloudFront ディストリビューションドメイン名）

## 独自ドメインの設定

- Route53 のホストゾーンに別途取得した独自ドメインで作成する
- CloudFront のディストリビューションで代替ドメインを設定する
- ACM を利用してTLS証明書を設定する
