﻿// <auto-generated />
using System;
using Interview.Domain.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Interview.Migrations.Sqlite.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20230830223815_Permission.Add_Table")]
    partial class PermissionAdd_Table
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.4");

            modelBuilder.Entity("Interview.Domain.Questions.Question", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreateDate")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("CreatedById")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsArchived")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER")
                        .HasDefaultValue(false);

                    b.Property<DateTime>("UpdateDate")
                        .HasColumnType("TEXT");

                    b.Property<string>("Value")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CreatedById");

                    b.ToTable("Questions");
                });

            modelBuilder.Entity("Interview.Domain.Reactions.Reaction", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreateDate")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("CreatedById")
                        .HasColumnType("TEXT");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("UpdateDate")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CreatedById");

                    b.HasIndex("Type");

                    b.ToTable("Reactions");

                    b.HasData(
                        new
                        {
                            Id = new Guid("48bfc63a-9498-4438-9211-d2c29d6b3a93"),
                            CreateDate = new DateTime(2023, 8, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "Dislike",
                            UpdateDate = new DateTime(2023, 8, 1, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("d9a79bbb-5cbb-43d4-80fb-c490e91c333c"),
                            CreateDate = new DateTime(2023, 8, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "Like",
                            UpdateDate = new DateTime(2023, 8, 1, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        });
                });

            modelBuilder.Entity("Interview.Domain.RoomConfigurations.RoomConfiguration", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("CodeEditorContent")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreateDate")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("CreatedById")
                        .HasColumnType("TEXT");

                    b.Property<bool>("EnableCodeEditor")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("UpdateDate")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CreatedById");

                    b.ToTable("RoomConfiguration");
                });

            modelBuilder.Entity("Interview.Domain.RoomParticipants.RoomParticipant", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreateDate")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("CreatedById")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("RoomId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasMaxLength(64)
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("UpdateDate")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("UserId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CreatedById");

                    b.HasIndex("RoomId");

                    b.HasIndex("UserId");

                    b.ToTable("RoomParticipants");
                });

            modelBuilder.Entity("Interview.Domain.RoomQuestionReactions.RoomQuestionReaction", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreateDate")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("CreatedById")
                        .HasColumnType("TEXT");

                    b.Property<string>("Payload")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("ReactionId")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("RoomQuestionId")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("SenderId")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("UpdateDate")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CreatedById");

                    b.HasIndex("ReactionId");

                    b.HasIndex("RoomQuestionId");

                    b.HasIndex("SenderId");

                    b.ToTable("RoomQuestionReactions");
                });

            modelBuilder.Entity("Interview.Domain.RoomQuestions.RoomQuestion", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreateDate")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("CreatedById")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("QuestionId")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("RoomId")
                        .HasColumnType("TEXT");

                    b.Property<string>("State")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("UpdateDate")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CreatedById");

                    b.HasIndex("QuestionId");

                    b.HasIndex("RoomId");

                    b.ToTable("RoomQuestions");
                });

            modelBuilder.Entity("Interview.Domain.RoomReviews.RoomReview", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreateDate")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("CreatedById")
                        .HasColumnType("TEXT");

                    b.Property<string>("Review")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<Guid>("RoomId")
                        .HasColumnType("TEXT");

                    b.Property<string>("SeRoomReviewState")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("UpdateDate")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("UserId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CreatedById");

                    b.HasIndex("RoomId");

                    b.HasIndex("UserId");

                    b.ToTable("RoomReview");
                });

            modelBuilder.Entity("Interview.Domain.Rooms.Room", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreateDate")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("CreatedById")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(70)
                        .HasColumnType("TEXT");

                    b.Property<char>("Status")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValue('N');

                    b.Property<string>("TwitchChannel")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("UpdateDate")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CreatedById");

                    b.ToTable("Rooms");
                });

            modelBuilder.Entity("Interview.Domain.Users.Permissions.Permission", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreateDate")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("CreatedById")
                        .HasColumnType("TEXT");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("UpdateDate")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CreatedById");

                    b.HasIndex("Type")
                        .IsUnique();

                    b.ToTable("Permissions");

                    b.HasData(
                        new
                        {
                            Id = new Guid("cebe2ad6-d9d5-4cfb-9530-925073e37ad5"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "QuestionArchive",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("eac25c4b-28d5-4e22-93b2-5c3caf0f6922"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "QuestionCreate",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("a2117904-59f1-4990-ae7f-d3d9d415f38e"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "QuestionDeletePermanently",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("94d1bd4d-d3cd-47c0-a223-a4e80287314b"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "QuestionFindById",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("6f652e58-1229-4a3c-b8cb-328bf817ad54"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "QuestionFindPageArchive",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("32e18595-1c0a-4dd5-bad7-2cbfbccbcb2a"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "QuestionUnarchive",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("175f724e-7299-4a0b-b827-0d4b0c6aed6b"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "QuestionUpdate",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("004cca49-9857-4973-9bda-79b57f60279b"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "ReactionFindPage",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("7c4d9ac2-72e7-466a-bcff-68f3ee0bc65e"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomAddParticipant",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("5ac11db0-b079-40ab-b32b-a02243a451b3"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomClose",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("c4c21128-f672-47d0-b0f5-2b3ca53fc420"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomCreate",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("6938365f-752d-453e-b0be-93facac0c5b8"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomFindById",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("aad7a083-b4dc-437e-a5db-c28512dedb5f"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomFindPage",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("a63b2ca5-304b-40a0-8e82-665a3327e407"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomGetAnalytics",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("b7ad620a-0614-494a-89ca-623e47b7415a"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomGetAnalyticsSummary",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("97b2411a-b9d4-49cb-9525-0e31b7d35496"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomGetState",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("9ce5949f-a7b9-489c-8b04-bd6724aff687"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomParticipantChangeStatus",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("d1916ab5-462e-41d7-ae46-f1ce27d514d4"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomParticipantCreate",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("4c3386da-cbb2-4493-86e8-036e8802782d"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomParticipantFindByRoomIdAndUserId",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("4f7a0200-9fe1-4d04-9bcc-6ed668d07828"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomQuestionChangeActiveQuestion",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("a115f072-638a-4472-8cc3-4cf04da67cfc"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomQuestionCreate",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("150f05e3-8d73-45e9-8ecd-6187f7b96461"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomQuestionFindGuids",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("1bb49aa7-1305-427c-9523-e9687392d385"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomQuestionReactionCreate",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("5f088b45-704f-4f61-b4c5-05bd08b80303"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomReviewCreate",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("64f1a5ed-e22a-4574-8732-c1aa6525f010"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomReviewFindPage",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("220380d1-fd72-4004-aed4-22187e88b386"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomReviewUpdate",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("882ffc55-3439-4d0b-8add-ba79e2a7df45"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomSendEventRequest",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("7df4ea9b-ded5-4a1d-a8ea-e92e6bd85269"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomStartReview",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("b5c4eb71-50c8-4c13-a144-0496ce56e095"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "RoomUpdate",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("53af37b0-2c68-4775-9ddb-ab143ce92fec"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "UserChangePermission",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("6439dbeb-1b8e-49b3-99e4-2a95712a3958"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "UserFindById",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("3f05ddc0-ef78-4916-b8b2-17fa11e95bb5"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "UserFindByNickname",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("0cb3a389-14b6-41a5-914b-3fd5cc876b28"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "UserFindByRole",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("c65b3cd1-0532-4b3a-8b25-5128b4124aa0"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "UserFindPage",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("946dff13-dfa5-424c-9891-6fcaa1e45ad1"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "UserGetPermissions",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("1c876e71-24d2-4868-9385-23078c0b1c18"),
                            CreateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Type = "UserUpsertByTwitchIdentity",
                            UpdateDate = new DateTime(2023, 8, 31, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        });
                });

            modelBuilder.Entity("Interview.Domain.Users.Roles.Role", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreateDate")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("CreatedById")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(64)
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("UpdateDate")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CreatedById");

                    b.ToTable("Roles");

                    b.HasData(
                        new
                        {
                            Id = new Guid("ab45cf57-aa1c-11ed-970f-98dc442de35a"),
                            CreateDate = new DateTime(2023, 8, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Name = "Admin",
                            UpdateDate = new DateTime(2023, 8, 1, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = new Guid("ab45a82b-aa1c-11ed-abe8-f2b335a02ee9"),
                            CreateDate = new DateTime(2023, 8, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Name = "User",
                            UpdateDate = new DateTime(2023, 8, 1, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        });
                });

            modelBuilder.Entity("Interview.Domain.Users.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Avatar")
                        .HasMaxLength(250)
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreateDate")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("CreatedById")
                        .HasColumnType("TEXT");

                    b.Property<string>("Nickname")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("TEXT");

                    b.Property<string>("TwitchIdentity")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("UpdateDate")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CreatedById");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("PermissionUser", b =>
                {
                    b.Property<Guid>("PermissionsId")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("UserId")
                        .HasColumnType("TEXT");

                    b.HasKey("PermissionsId", "UserId");

                    b.HasIndex("UserId");

                    b.ToTable("PermissionUser");
                });

            modelBuilder.Entity("RoleUser", b =>
                {
                    b.Property<Guid>("RolesId")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("UserId")
                        .HasColumnType("TEXT");

                    b.HasKey("RolesId", "UserId");

                    b.HasIndex("UserId");

                    b.ToTable("RoleUser");
                });

            modelBuilder.Entity("Interview.Domain.Questions.Question", b =>
                {
                    b.HasOne("Interview.Domain.Users.User", "CreatedBy")
                        .WithMany()
                        .HasForeignKey("CreatedById");

                    b.Navigation("CreatedBy");
                });

            modelBuilder.Entity("Interview.Domain.Reactions.Reaction", b =>
                {
                    b.HasOne("Interview.Domain.Users.User", "CreatedBy")
                        .WithMany()
                        .HasForeignKey("CreatedById");

                    b.Navigation("CreatedBy");
                });

            modelBuilder.Entity("Interview.Domain.RoomConfigurations.RoomConfiguration", b =>
                {
                    b.HasOne("Interview.Domain.Users.User", "CreatedBy")
                        .WithMany()
                        .HasForeignKey("CreatedById");

                    b.HasOne("Interview.Domain.Rooms.Room", "Room")
                        .WithOne("Configuration")
                        .HasForeignKey("Interview.Domain.RoomConfigurations.RoomConfiguration", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CreatedBy");

                    b.Navigation("Room");
                });

            modelBuilder.Entity("Interview.Domain.RoomParticipants.RoomParticipant", b =>
                {
                    b.HasOne("Interview.Domain.Users.User", "CreatedBy")
                        .WithMany()
                        .HasForeignKey("CreatedById");

                    b.HasOne("Interview.Domain.Rooms.Room", "Room")
                        .WithMany("Participants")
                        .HasForeignKey("RoomId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Interview.Domain.Users.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CreatedBy");

                    b.Navigation("Room");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Interview.Domain.RoomQuestionReactions.RoomQuestionReaction", b =>
                {
                    b.HasOne("Interview.Domain.Users.User", "CreatedBy")
                        .WithMany()
                        .HasForeignKey("CreatedById");

                    b.HasOne("Interview.Domain.Reactions.Reaction", "Reaction")
                        .WithMany()
                        .HasForeignKey("ReactionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Interview.Domain.RoomQuestions.RoomQuestion", "RoomQuestion")
                        .WithMany()
                        .HasForeignKey("RoomQuestionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Interview.Domain.Users.User", "Sender")
                        .WithMany()
                        .HasForeignKey("SenderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CreatedBy");

                    b.Navigation("Reaction");

                    b.Navigation("RoomQuestion");

                    b.Navigation("Sender");
                });

            modelBuilder.Entity("Interview.Domain.RoomQuestions.RoomQuestion", b =>
                {
                    b.HasOne("Interview.Domain.Users.User", "CreatedBy")
                        .WithMany()
                        .HasForeignKey("CreatedById");

                    b.HasOne("Interview.Domain.Questions.Question", "Question")
                        .WithMany()
                        .HasForeignKey("QuestionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Interview.Domain.Rooms.Room", "Room")
                        .WithMany("Questions")
                        .HasForeignKey("RoomId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CreatedBy");

                    b.Navigation("Question");

                    b.Navigation("Room");
                });

            modelBuilder.Entity("Interview.Domain.RoomReviews.RoomReview", b =>
                {
                    b.HasOne("Interview.Domain.Users.User", "CreatedBy")
                        .WithMany()
                        .HasForeignKey("CreatedById");

                    b.HasOne("Interview.Domain.Rooms.Room", "Room")
                        .WithMany()
                        .HasForeignKey("RoomId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Interview.Domain.Users.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CreatedBy");

                    b.Navigation("Room");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Interview.Domain.Rooms.Room", b =>
                {
                    b.HasOne("Interview.Domain.Users.User", "CreatedBy")
                        .WithMany()
                        .HasForeignKey("CreatedById");

                    b.Navigation("CreatedBy");
                });

            modelBuilder.Entity("Interview.Domain.Users.Permissions.Permission", b =>
                {
                    b.HasOne("Interview.Domain.Users.User", "CreatedBy")
                        .WithMany()
                        .HasForeignKey("CreatedById");

                    b.Navigation("CreatedBy");
                });

            modelBuilder.Entity("Interview.Domain.Users.Roles.Role", b =>
                {
                    b.HasOne("Interview.Domain.Users.User", "CreatedBy")
                        .WithMany()
                        .HasForeignKey("CreatedById");

                    b.Navigation("CreatedBy");
                });

            modelBuilder.Entity("Interview.Domain.Users.User", b =>
                {
                    b.HasOne("Interview.Domain.Users.User", "CreatedBy")
                        .WithMany()
                        .HasForeignKey("CreatedById");

                    b.Navigation("CreatedBy");
                });

            modelBuilder.Entity("PermissionUser", b =>
                {
                    b.HasOne("Interview.Domain.Users.Permissions.Permission", null)
                        .WithMany()
                        .HasForeignKey("PermissionsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Interview.Domain.Users.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("RoleUser", b =>
                {
                    b.HasOne("Interview.Domain.Users.Roles.Role", null)
                        .WithMany()
                        .HasForeignKey("RolesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Interview.Domain.Users.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Interview.Domain.Rooms.Room", b =>
                {
                    b.Navigation("Configuration");

                    b.Navigation("Participants");

                    b.Navigation("Questions");
                });
#pragma warning restore 612, 618
        }
    }
}
