[実践編：React Native と Firebase で作る iOS/Android アプリ：お店レビューアプリ開発編](https://www.udemy.com/course/react-native-firebase/learn/lecture/21271376#questions/12710940)このサイトでやったことを書いている。

# 使い方

1. まず公式ページから[Node.js](https://nodejs.org/ja/)をインストールします。
1. 次に、yarn をインストールします。  
   `npm install -g yarn`を実行
1. expo をインストールします。  
   `yarn add expo`を実行
1. 環境構築を行います。  
   `yarn install `
1. QR コードを読み込んで、確認してみましょう  
   `yarn start`

ReactNative で躓くこととして、

1. yarn のインストール
1. PowerShell の権限の変更をする必要がある(Windows)
1. パソコン側の Wi-Fi の設定(パブリックからプライベートにする必要がある)
   というところがあります。

# 参考文献

1. [Yarn を導入しよう（Windows）](https://qiita.com/kurararara/items/21c70c4adfd3bb323412)
1. [実行ポリシーについて](https://docs.microsoft.com/ja-jp/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7)  
   Windows で、expo init など expo 系の事を実行出来なかったときに、このような権限がありません！と出てくる。それを改善するために使える Q&A
1. [今まで、アプリの開発ができていたのに、急にできなくなった場合](https://stackoverflow.com/questions/54604991/expo-app-cant-load-project-with-message-this-is-taking-much-longer-than-it)  
   [設定]、[ネットワーク]、[Wi-Fi]に移動し、インターネット接続で利用可能なネットワーク、プロパティを表示して、[プライベート]をクリックします。その後、うまくいきました。あなたにも役立つことを願っています。

1. [.gitignore で git にコミットしないディレクトリを管理する【node_modules】](https://qiita.com/growsic/items/b2965c0ba3b0aaae1ff8)
   node_modules を保存しなくても良いようにすることで、Git の管理を簡単にすることに成功した。
