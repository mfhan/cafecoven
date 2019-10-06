class AddMoreSocialToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :soc2, :string
    add_column :users, :soc3, :string
  end
end
