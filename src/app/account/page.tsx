
"use client";

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { WishlistGrid } from '@/components/wishlist-grid';
import { AddressManager } from '@/components/address-manager';

export default function AccountPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold font-headline mb-8">My Account</h1>
      <Tabs defaultValue="orders" className="flex flex-col md:flex-row gap-8">
        <TabsList className="flex flex-col h-auto justify-start md:w-1/4 lg:w-1/5">
          <TabsTrigger value="profile" className="w-full justify-start">Profile</TabsTrigger>
          <TabsTrigger value="addresses" className="w-full justify-start">Addresses</TabsTrigger>
          <TabsTrigger value="orders" className="w-full justify-start">Order History</TabsTrigger>
          <TabsTrigger value="wishlist" className="w-full justify-start">Wishlist</TabsTrigger>
        </TabsList>
        <div className="flex-1">
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>
                  Manage your personal information and password.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                      <div className="space-y-2">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                  </CardContent>
                </Card>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="addresses">
             <AddressManager />
          </TabsContent>
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Your Orders</CardTitle>
                <CardDescription>
                  A list of your past orders from StompStyle.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">#STMP1024</TableCell>
                      <TableCell>2023-10-26</TableCell>
                      <TableCell>Shipped</TableCell>
                      <TableCell className="text-right">$249.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#STMP1012</TableCell>
                      <TableCell>2023-08-15</TableCell>
                      <TableCell>Delivered</TableCell>
                      <TableCell className="text-right">$129.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#STMP1003</TableCell>
                      <TableCell>2023-05-01</TableCell>
                      <TableCell>Delivered</TableCell>
                      <TableCell className="text-right">$379.98</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="wishlist">
            <Card>
              <CardHeader>
                <CardTitle>Your Wishlist</CardTitle>
                <CardDescription>
                  Products you have saved for later.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WishlistGrid />
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
