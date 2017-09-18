using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Vue.Models;

namespace Vue.Hubs
{
    public class ClienteHub : Hub
    {
        public ClienteVM Create(ClienteVM product)
        {
            //productService.Create(product);
            var i = DateTime.Now.Millisecond;
            product = new ClienteVM()
            {
                Email = "teste@teste1.com.br" + i,
                Nome = "teste" + i,
            };
            Clients.Others.create(product);

            return product;
        }

        public void Destroy(ClienteVM product)
        {
            product = null;
            Clients.Others.destroy(product);
        }

        public IEnumerable<ClienteVM> Read()
        {
            var model = new List<ClienteVM>();
            for (int i = 0; i < 10; i++)
            {
                model.Add(new ClienteVM()
                {
                    Email = "teste@teste1.com.br" + i,
                    Nome = "teste" + i,
                });
            }
            return model;
        }

        public void Update(ClienteVM product)
        {
            Clients.Others.update(product);
        }
    }
}