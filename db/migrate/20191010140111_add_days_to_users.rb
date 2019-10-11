class AddDaysToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :days, :string
  end
end
