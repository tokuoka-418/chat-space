## usersデーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|

### Association
- has_many :group  through:  :groups_users
- has_many :comments



 ## groupテーブル

 |Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :comments
- has_many  :users,  through:  :groups_users
- has_many  :group  through:  :groups_users




## commntesテーブル

 |Column|Type|Options|
|------|----|-------|
|text|text|
|imege|binary|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belong_to : user
- belong_to :comment




## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user