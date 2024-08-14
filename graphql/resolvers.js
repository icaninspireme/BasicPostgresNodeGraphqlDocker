const Account = require('../models/Account');

const resolvers = {
    Query: {
        async getAccount(_,{id}) {
            try {
                const account = await Account.findByPk(id);
                return account;
            } catch (error) {
                throw new Error('Error fetching account');
            }
        },
        async getAllAccounts(){
            try {
                const accounts = await Account.findAll();
                    return accounts;
            } catch (error){
                    console.log(error)
                    throw new Error('Error fetching all accounts');
            }
        },
    },
    Mutation: {
        async createAccount(parent, {firstName, lastName}){
            try{
                const account = await Account.create({ firstName, lastName });
                return account;
            } catch(error) {
                throw new Error('Error creating Account');
            }
        },
        async updateAccount(parent, {id, firstName, lastName}){
            try{
                const account = await Account.findByPk(id);
                if(!account) {
                    throw new Error('Account not found');
                }
                account.firstName = firstName;
                account.lastName = lastName;
                await account.save();
                return account;    
            } catch(error){
                throw new Error('Error updating Account');
            }
        },
        async deleteAccount(parent, {id}){
            try{
                const account = await Account.findByPk(id);
                if(!account){
                   throw new Error('Account not found');
                }
                await account.destroy();
                return account;
            } catch(error){
                throw new Error('Error deleting account');
            }
        }
    },
};

module.exports = resolvers;