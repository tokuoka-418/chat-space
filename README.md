+## usersデーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|

### Association
- has_many :group
- has_many :comments



 ## groupテーブル

 |Column|Type|Options|
|------|----|-------|
|groupname|string|null: false|
|users_id|integer|null: false, foreign_key: true|

### Association
- belong_to : users
- has_many :comments
- has_many  :users,  through:  :groups_users




## commntesテーブル

 |Column|Type|Options|
|------|----|-------|
|text|text|null: false, foreign_key: true|
|imege|binary|null: false, foreign_key: true|

### Association
- belong_to : users
- belong_to :comments




## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user