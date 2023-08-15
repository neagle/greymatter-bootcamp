# Procedure for AWS Environments

## Configure AWS accounts to assume roles when accessing AWS

### Download Access_key and secret_access_key
- To get your access key ID and secret access key
- Open the IAM console at <https://console.aws.amazon.com/iam/.>
- On the navigation menu, choose Users.
- Choose your IAM user name (not the check box).
- Open the Security credentials tab, and then choose Create access key.
- To see the new access key, choose Show. Your credentials resemble the following:
- To download the key pair, choose Download .csv file. Store the .csv file with keys in a secure location.

### Install aws cli
- In your browser, download the macOS pkg file: <https://awscli.amazonaws.com/AWSCLIV2.pkg>
- Run your downloaded file and follow the on-screen instructions. You can choose to install the AWS CLI in the following ways:
- For all users on the computer (requires sudo)
- You can install to any folder, or choose the recommended default folder of /usr/local/aws-cli.
- The installer automatically creates a symlink at /usr/local/bin/aws that links to the main program in the installation folder you chose.

### Setup aws to assume roles

```sh
# install awsume
brew install pipx
pipx install awsume
# add assume to .bashrc and/or .zshrc
alias awsume='. awsume'
# change to ~/.awsume/config.yaml
colors: true
fuzzy-match: false
role-duration: 1200
# add to ~/.aws/config
[default]
region = us-east-1
[profile users]
region = us-east-1
[profile bs-resources]
region = us-east-1
role_arn = arn:aws:iam::988463703556:role/cross_account_power_user
source_profile = users
[profile bs-resources-admin]
region = us-east-1
role_arn = arn:aws:iam::988463703556:role/cross_account_admin
source_profile = users
[profile covid-admin]
region = us-east-1
role_arn = arn:aws:iam::153757265334:role/covid_admin
source_profile = users
[profile staging-admin]
region = us-east-1
role_arn = arn:aws:iam::151736245382:role/staging_admin
source_profile = users
[profile prod-admin]
region = us-east-1
role_arn = arn:aws:iam::089499377644:role/prod_admin
source_profile = users
# assume role bs-resources-admin
awsume bs-resources-admin
# test by listing DNS zones
aws route53 list-hosted-zones
```

### For k0ps install - configure buttermilk-sky tool bs
```sh
# install deno
curl -fsSL <https://deno.land/install.sh> | sh
# add deno to path
export DENO_INSTALL="/Users/pichette/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
```

To install the bs tool follow the instructions [here](https://github.com/greymatter-io/bs).

### To deploy a k0ps cluster

```sh
# get ansible secret
awsume bs-resources-admin
aws secretsmanager get-secret-value --secret-id ansible-provision-private-ssh-key
# create public key
ssh-keygen -f ~/.ssh/ansible-provision -y > ~/.ssh/ansible-provision.pub
# create the kops cluster
export NAME="<ADD_NAME>"
bs create-kops-cluster --name $NAME --vpc dev2
export NAME="${NAME}.k8s.local"
kops update cluster $NAME --yes
# export k8s context locally
kops export kubecfg $NAME --admin
```
